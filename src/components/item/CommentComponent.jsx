import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import ApiEndpoints from '../../utils/ApiEndpoints';

function htmlDecode(input)
{
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

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
                <ListGroup variant="flush">
                    Comments
                    {comments.map(function(comment) {
                        if (!comment.deleted) {
                            return (<ListGroup.Item>
                                    <p key={comment.id}>{htmlDecode(comment.text)}</p>
                                    <p><i>{(comment.kids && comment.kids.length) || 0} children</i></p>
                                </ListGroup.Item>);
                        } else {
                            return <div><i>Deleted.</i></div>
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