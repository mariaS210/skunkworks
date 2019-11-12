import React from 'react';
import ItemListComponent from './ItemListComponent';


class TopStoriesComponent extends React.Component {
    render() {
        return <ItemListComponent endpoint="topstories" searchTerm={this.props.searchTerm} bookmarkAction={this.props.bookmarkAction}/>;
    }
}

export default TopStoriesComponent;