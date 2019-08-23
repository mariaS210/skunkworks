import React from 'react';
import UpvoteComponent from './UpvoteComponent'

class ItemComponent extends React.Component {
    render() {
        return (
            <div> Item Component
                <UpvoteComponent />
            </div>
        )
    }
}

export default ItemComponent;