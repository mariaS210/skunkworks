import React from 'react';
import UpvoteComponent from './UpvoteComponent'
import SummaryComponent from './SummaryComponent';

import ApiEndpoints from '../../utils/ApiEndpoints';


class ItemComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: null,
            index: this.props.index,
            score: 0
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
        let itemNo = this.state.index;
        let itemTitle = " " + (item && item.title);
        let itemLink = item && item.url;
        let score = this.buildScore();
        
        let url = this.parseURL(itemLink);

        return (
            <div>
                {itemNo}. <UpvoteComponent upvoteAction={this.upvoteAction}/>
                <a href={itemLink}>{itemTitle}</a> ({url.hostname})
                <SummaryComponent item={item}
                                  score={score}
                                  changeOpenedStory={this.props.changeOpenedStory}
                                  openedStory={this.props.openedStory}/>
            </div>
        )
    }
}

export default ItemComponent;