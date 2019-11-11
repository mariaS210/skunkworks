import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ApiEndpoints from '../../utils/ApiEndpoints';
import htmlDecode from '../../utils/helpers';

const MAX_COMMENT_DEPTH = 5;

class CommentListComponent extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
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

    updateReplies = (newReplies) => {
        if (this._isMounted) {
            this.setState({
                replies: newReplies
            })
        }
    }

    fetchReplies = () => {
        ApiEndpoints.getBulkNewsItems(this.props.kids, this.updateReplies);
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
            <i className="Comment" onClick={()=>{this.updateExpanded()}}>
                <FontAwesomeIcon icon={icon} />
                {this.props.kids.length} replies
            </i>
            {expanded && this.fetchReplies()}
            {expanded && <ListGroup variant="flush">
                    {replies.map((comment) => {
                        if (!comment.deleted) {
                            return (<ListGroup.Item key={"itm-" + comment.id}>
                                    <div key={comment.id}>{htmlDecode(comment.text)}</div>
                                    <CommentListComponent kids={comment.kids} depth={depth}/>
                                </ListGroup.Item>);
                        } else {
                            return <div key={comment.id}><i>Deleted.</i></div>
                        }
                    })}
                </ListGroup>
            }
            </div>
        );
    }
}
export default CommentListComponent;