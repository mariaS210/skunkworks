import React from 'react';
import ItemListComponent from './ItemListComponent';

const BASE_PATH = "/search/";

class SearchListComponent extends React.Component {
    render() {
        let path = (this.props && 
                    this.props.history && 
                    this.props.history.location && 
                    this.props.history.location.pathname &&
                    this.props.history.location.pathname.replace(BASE_PATH, "")
        ) || "";
        let endpoint = (this.props && this.props.endpoint) || 'newstories';
        let searchTerm = (this.props && this.props.searchTerm) || path;
        return <ItemListComponent
            endpoint={endpoint}
            searchTerm={searchTerm} 
        />;
    }
}
export default SearchListComponent;