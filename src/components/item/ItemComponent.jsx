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
            score: 0,
            searchTerm: this.props.searchTerm,
        };
    }

    upvoteAction = () => {
        let score = this.state && this.state.score;
        this.setState({
            score: score + 1
        });
    }

    componentDidMount() {
        ApiEndpoints.getNewsItem(
            this.props.itemId,
            response => this.setState({
                    item: response
                })
        );
    }

    buildScore = () => {
        let localScore = this.state && this.state.score;
        let hckrScore = this.state.item && this.state.item.score;
        let score = hckrScore + localScore;
        return score;
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
        let score = this.buildScore();
        
        let url = this.parseURL(itemLink);
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
            return (
                <div>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title><a href={itemLink}>{itemTitle}</a> ({url.hostname})</Card.Title>
                            <Card.Text>
                            
                            <SummaryComponent item={item}
                                              score={score}
                                              changeOpenedStory={this.props.changeOpenedStory}
                                              openedStory={this.props.openedStory}
                                              upvoteAction={this.upvoteAction}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br/>
                </div>
            );
        }
    }
}

export default ItemComponent;