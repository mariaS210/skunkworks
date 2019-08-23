import React from 'react';
import UpvoteComponent from './UpvoteComponent'
import SummaryComponent from './SummaryComponent';

import ApiEndpoints from '../../utils/ApiEndpoints';


class ItemComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: null
        };
    }

    componentDidMount() {
        ApiEndpoints.getNewsItem(
            this.props.itemId,
            response => this.setState({
                    item: response
                })
        );
    }

    render() {
        let item = this.state.item;
        return (
            <div> Item Component
                <SummaryComponent />
                <UpvoteComponent item={item}/>
            </div>
        )
    }
}

export default ItemComponent;