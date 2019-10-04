import React from 'react';

import ApiEndpoints from '../../utils/ApiEndpoints';

class CommentComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
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
        let index = 1;
        if (comments.length > 0) {
            return (
                <div>
                    Comments
                    {comments.map(function(comment) {
                        if (!comment.deleted) {
                            return <p key={comment.id}>{index++}. {comment.text}</p>;
                        } else {
                            return <div><i>Deleted.</i></div>
                        }
                    })}
                </div>
            );
        } else {
            return <div><i>No comments.</i></div>;
        }
    }

}

export default CommentComponent;