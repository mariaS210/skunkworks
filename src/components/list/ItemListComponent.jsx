import React from 'react';

import ApiEndpoints from '../../utils/ApiEndpoints';
import ItemComponent from '../item/ItemComponent';


class ItemListComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: null,
            isLoading: false
        };
    }

    componentDidMount() {
        ApiEndpoints.getNewsItems(response => this.setState({
                    items: response
                })
        );
    }

    render() {
        let newsItems = this.state.items;
        if (!newsItems) {
            newsItems = [];
        }

        return (
            <div>
                {newsItems.map((item, index) => (
                    <ItemComponent key={index} index={index} itemId={item} />
                ))}
            </div>
        )
    }
}

export default ItemListComponent;
