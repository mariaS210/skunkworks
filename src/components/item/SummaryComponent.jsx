import React from 'react';
import ReactDOM from 'react-dom';

import ApiEndpoints from '../../utils/ApiEndpoints';


class SummaryComponent extends React.Component {
    render() {
      if (this.props && this.props.item) {
        let author = this.props.item.by;
        let points = this.props.item.score;
        let time = this.props.item.time;
        let comments = this.props.item.kids.length;
        let postDate = new Date(time * 1000);
        let timeDiff = Math.abs(Date.now() - postDate) / 36e5; // in hours
        let timeUnit = "hours"
        if (timeDiff > 24) {
          timeUnit = "days";
          timeDiff /=24;
        }

         return <div>{points} points by {author} | {Math.floor(timeDiff)} {timeUnit} ago | {comments} comments</div>;
      } else {
        return <div>No data available.</div>
      }
    }
}

export default SummaryComponent;