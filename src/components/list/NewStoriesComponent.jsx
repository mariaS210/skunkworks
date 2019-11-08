import React from 'react';
import ItemListComponent from './ItemListComponent';

class NewStoriesComponent extends React.Component {
    render() {
        return <ItemListComponent endpoint="newstories" />;
    }
}
export default NewStoriesComponent;