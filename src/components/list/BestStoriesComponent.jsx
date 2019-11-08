import React from 'react';
import ItemListComponent from './ItemListComponent';


class BestStoriesComponent extends React.Component {
    render() {
        return <ItemListComponent endpoint="beststories" />
    }
}
export default BestStoriesComponent;