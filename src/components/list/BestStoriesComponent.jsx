import React from 'react';
import ItemListComponent from './ItemListComponent';


class BestStoriesComponent extends React.Component {
    render() {
        return <ItemListComponent endpoint="beststories"  searchTerm={this.props.searchTerm} bookmarkAction={this.bookmarkAction}/>
    }
}
export default BestStoriesComponent;