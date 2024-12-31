import React from 'react';
import Card from 'react-bootstrap/Card';

import SummaryComponent from './SummaryComponent';

import ApiEndpoints from '../../utils/ApiEndpoints';


class ItemComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: null,
            index: this.props.index,
            searchTerm: this.props.searchTerm,
        };
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        ApiEndpoints.getNewsItem(
            this.props.itemId,
            response => {
                if (this._isMounted) {
                    this.setState({
                    item: response
                    });
                }
            }
        );
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    parseURL = (itemLink) => {
        //  Create an anchor element (note: no need to append this element to the document)
        let url = document.createElement('a');
        //  Set href to any path
        url.setAttribute('href', itemLink);
        return url;
    }

    render() {
        let item = this.state.item;
        let itemTitle = " " + (item && item.title);
        let itemLink = (item && item.url);
        let score = item && item.score;
        
        let hostname = "(" + this.parseURL(itemLink).hostname + ")";
        let term = this.props.searchTerm && this.props.searchTerm.toLowerCase()
        let shouldDisplay = (term && (
            itemTitle.toLowerCase().includes(term) ||
            ("" + itemLink).toLowerCase().includes(term) ||
            ((item && item.author) || "").toLowerCase().includes(term)
        )) || !term;
        if (!shouldDisplay) {
            return (null);
        }
        else {
            let title = itemLink ? (<a href={itemLink}>{itemTitle}</a>) : itemTitle;
            return (
                <div>
                    <Card border="light" body>
                    <div className="item">{title} {itemLink && hostname}</div>
                        <SummaryComponent item={item}
                                          score={score}
                                          changeOpenedStory={this.props.changeOpenedStory}
                                          openedStory={this.props.openedStory}
                                          bookmarkAction={this.props.bookmarkAction}/>
                    </Card>
                    <br/>
                </div>
            );
        }
    }
}

export default ItemComponent;
