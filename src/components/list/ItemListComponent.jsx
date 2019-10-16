import React from 'react';

import ApiEndpoints from '../../utils/ApiEndpoints';
import ItemComponent from '../item/ItemComponent';


class ItemListComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: null,
            isLoading: false,
            openedStory: 0
        };
    }

    componentDidMount() {
        ApiEndpoints.getNewsItems(response => this.setState({
                    items: response
                })
        );
    }

    changeOpenedStory = (storyId) => {
        let oldStoryId = this.state.openedStory;
        if (!storyId || oldStoryId === storyId) {
            this.setState({
                openedStory: 0
            }); // just close opened story
            return
        }
        this.setState({
            openedStory: storyId // new story opened
        });
    }

    render() {
        let newsItems = this.state.items;
        if (!newsItems) {
            newsItems = [];
        }

        return (
            <div class="container">
                {newsItems.map((item, index) => (
                    <ItemComponent key={index}
                                   index={index}
                                   itemId={item}
                                   changeOpenedStory={this.changeOpenedStory}
                                   openedStory={this.state.openedStory}/>
                ))}
            </div>
        )
    }
}

export default ItemListComponent;
