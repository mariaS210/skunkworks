import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfiniteScroll from 'react-infinite-scroll-component';
import ApiEndpoints from '../../utils/ApiEndpoints';

const MAX_COMMENT_DEPTH = 5;

class CommentListComponent extends React.Component {
    _isMounted = false;
    _sliceLength = 5;

    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded,
            replies: []
        }
    }

    updateExpanded = () => {
        let oldExpanded = this.state.expanded;
        if (this._isMounted) {
            this.setState({
                expanded: !oldExpanded,
                replies: !oldExpanded ? this.state.replies : []
            });
        }
    }

    fetchNextReplies = () => {
        let startIndex = this.state.replies.length;
        let endIndex = startIndex + this._sliceLength;
        ApiEndpoints.getBulkNewsItemsPaginated(
            this.props.kids,
            startIndex, endIndex,
            this.state.replies,
            response => this.setState({
                replies: response
            })
        );
    }

    updateReplies = (newReplies) => {
        if (this._isMounted) {
            this.setState({
                replies: newReplies
            })
        }
    }

    fetchFirstReplies = () => {
        let initialReplies = []
        ApiEndpoints.getBulkNewsItemsPaginated(
            this.props.kids,
            0, this._sliceLength,
            initialReplies,
            this.updateReplies
        );
    }

    checkMore = () => {
        return this.state.replies.length < this.props.kids.length;
    }
    
    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        // quick no displays
        // 1. no replies
        let haveReplies = !!(this.props.kids && this.props.kids.length);
        if (!haveReplies) {
            return <div className="Comment"><i>no replies</i></div>
        }
        // 2. maximum depth reached
        let depth = (this.props.depth || 0) + 1;
        if (depth > MAX_COMMENT_DEPTH) {
            return <div className="Comment"><i>Continue this thread...</i></div>
        }

        let expanded = this.state.expanded;
        let icon = expanded ? "angle-up" : "angle-down";
        let replies = this.state.replies;
        return (
            <div>
            {!this.props.hideReplies && <i className="Comment" onClick={()=>{this.updateExpanded()}}>
                <FontAwesomeIcon icon={icon} />
                {this.props.kids.length} replies
            </i>}
            {expanded && this.fetchFirstReplies()}
            {expanded && <ListGroup variant="flush">
                    <InfiniteScroll
                        dataLength={replies.length}
                        next={this.fetchNextReplies}
                        hasMore={this.checkMore}
                        loader={<Spinner animation="border"
                                         variant="secondary"
                                         size="sm" />}
                        endMessage={<p>-</p>}>
                    {replies.map((comment) => {
                        if (!comment.deleted) {
                            return (<ListGroup.Item key={"itm-" + comment.id} className="no-border">
                                    <div key={comment.id} dangerouslySetInnerHTML={{ __html: unescape(comment.text)}}/>
                                    <CommentListComponent kids={comment.kids} depth={depth}/>
                                </ListGroup.Item>);
                        } else {
                            return <div key={comment.id}><i>Deleted.</i></div>
                        }
                    })}
                    </InfiniteScroll>
                </ListGroup>
            }
            </div>
        );
    }
}
export default CommentListComponent;
