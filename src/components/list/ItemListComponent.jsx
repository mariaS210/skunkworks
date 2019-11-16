import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfiniteScroll from 'react-infinite-scroll-component';

import ApiEndpoints from '../../utils/ApiEndpoints';
import ItemComponent from '../item/ItemComponent';


class ItemListComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            endpoint: this.props.endpoint,
            items: null,
            isLoading: false,
            openedStory: 0,
            bookmarks: [],
        };
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        let endpoint = (this.state && this.state.endpoint) || "beststories";
        let forceMakeRequest = true;
        ApiEndpoints.getNewsItems(response => this.setState({
            items: response
        }), endpoint, forceMakeRequest
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
        const { version } = require('../../../package.json');
        return (
            <div>
                <div className="Version">
                <a href="https://github.com/mariaS210/skunkworks"><FontAwesomeIcon icon={["fab", "github"]}/>
                {" "}version {version}</a>
                </div>
            <div className="container">
                <InfiniteScroll
                    dataLength={newsItems.length} //This is important field to render the next data
                    next={this.loadItems}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }>
                    {newsItems.map((item, index) => (
                        <ItemComponent key={index}
                            index={index}
                            itemId={item}
                            searchTerm={this.props.searchTerm}
                            changeOpenedStory={this.changeOpenedStory}
                            openedStory={this.state.openedStory}
                            bookmarkAction={this.props.bookmarkAction}/>
                    ))}
                </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default ItemListComponent;
