import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import ApiEndpoints from '../../utils/ApiEndpoints';
import htmlDecode from '../../utils/helpers';
import CommentListComponent from '../list/CommentListComponent';



class CommentComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            kids: [],
            expanded: false,
        }
    }

    updateComments = (newComments) => {
        this.setState({
            comments: newComments
        });
    }

    componentDidMount() {
        let item = this.props.item;
        let kids = item && item.kids;
        ApiEndpoints.getBulkNewsItems(kids, this.updateComments);
    }

    render() {
        let comments = this.state.comments;
        let depth = (this.props.depth || 0) + 1;
        if (comments.length > 0) {
            return (
                <ListGroup variant="flush">
                    Comments
                    {comments.map((comment) => {
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
            );
        } else {
            return <div><i>Stand by.</i></div>;
        }
    }

}

export default CommentComponent;