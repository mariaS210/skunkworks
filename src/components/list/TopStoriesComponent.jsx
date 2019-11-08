import React from 'react';
import ItemListComponent from './ItemListComponent';


class TopStoriesComponent extends React.Component {
    render() {
        return <ItemListComponent endpoint="topstories" />;
    }
}

export default TopStoriesComponent;