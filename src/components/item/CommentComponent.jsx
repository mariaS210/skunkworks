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
        return (
            <div>
                Comments
                {comments && comments.map(function(comment) {
                    return <p>{index++}. {comment.text}</p>;
                })}
                {!comments && <p>No comments.</p>}
            </div>

        )
    }

}

export default CommentComponent;