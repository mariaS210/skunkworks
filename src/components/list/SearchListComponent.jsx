import React from 'react';
import ItemListComponent from './ItemListComponent';


class SearchListComponent extends React.Component {
    render() {
        let endpoint = (this.props && this.props.endpoint) || 'newstories';
        let searchTerm = this.props && this.props.searchTerm;
        return <ItemListComponent
            endpoint={endpoint}
            searchTerm={searchTerm} 
        />;
    }
}
export default SearchListComponent;