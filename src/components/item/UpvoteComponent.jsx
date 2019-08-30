import React from 'react'

class UpvoteComponent extends React.Component {

    render() {
        return (
            <div className="UpvoteURL" onClick={this.props.upvoteAction}>▲</div>
        )
    }
}

export default UpvoteComponent;