import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UpvoteComponent extends React.Component {

    render() {
        return (
            <div className="btn btn-outline-success" onClick={this.props.upvoteAction}>
                <FontAwesomeIcon icon="thumbs-up" />
            </div>
        )
    }
}

export default UpvoteComponent;