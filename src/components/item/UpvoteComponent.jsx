import React from 'react'

class UpvoteComponent extends React.Component {
    render() {
        let score = this.props && this.props.item && this.props.item.score;
        return (
            <div className="Upvote">{score} points</div>
        )
    }
}

export default UpvoteComponent;