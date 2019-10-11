import React from 'react';
import CommentComponent from './CommentComponent';


class SummaryComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComments: false
      };
    }

    changeShowComments = () => {
        let oldShowComments = this.state.showComments;
        this.setState({
          showComments: !oldShowComments 
        });
    }

    render() {
      if (this.props && this.props.item) {
        let author = this.props.item.by;
        let points = this.props.score;
        let time = this.props.item.time;
        let comments = this.props.item.kids ? this.props.item.kids.length : 0;
        let postDate = new Date(time * 1000);
        let timeDiff = Math.abs(Date.now() - postDate) / 36e5; // in hours
        let timeUnit = "hours"
        if (timeDiff > 24) {
          timeUnit = "days";
          timeDiff /=24;
        }
        let shouldRenderComments = (this.props.openedStory === this.props.item.id)//this.state.showComments;

         return (<div>
          {points} points by {author} |
          {Math.floor(timeDiff)} {timeUnit} ago |
          <span className="Comment" onClick={() => {
            this.props.changeOpenedStory(this.props.item.id);}}>{comments} comments</span>
          {shouldRenderComments && <CommentComponent key={this.props.item.id} item={this.props.item}/>}
         </div>);
      } else {
        return <div>No data available.</div>
      }
    }
}

export default SummaryComponent;