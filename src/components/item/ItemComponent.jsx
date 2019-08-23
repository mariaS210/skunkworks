import React from 'react';
import UpvoteComponent from './UpvoteComponent'
import SummaryComponent from './SummaryComponent';


class ItemComponent extends React.Component {
    render() {
        return (
            <div> Item Component
                 <SummaryComponent /><UpvoteComponent />
            </div>
        )
    }
}

export default ItemComponent;