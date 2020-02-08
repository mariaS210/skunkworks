import React from 'react';
import CommentListComponent from '../list/CommentListComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ROOT_DEPTH = 0;


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

    computeTimeString = (time) => {
      let postDate = new Date(time * 1000);
      let timeDiff = Math.abs(Date.now() - postDate) / 36e5; // in hours
      let timeUnit = "hours";
      if (timeDiff > 24) {
        timeUnit = "days";
        timeDiff /=24;
      }
      let timeNumber = Math.floor(timeDiff);
      return ` ${timeNumber} ${timeUnit} ago`;
    }

    computeIcon = (item) => {
      let icon = item.type === "job" ? "suitcase" : "link";
      if (item.type === "story") {
        if (item.title.startsWith("Ask HN: ")) {
          icon = "question";
        } else if (item.title.startsWith("Show HN: ")) {
          icon = "eye";
        }
      }
      return icon;
    }

    render() {
      if (this.props && this.props.item) {
        let item = this.props.item;
        let points = " " + this.props.score;
        let comments = item.kids ? item.kids.length : 0;
        let postDate = this.computeTimeString(item.time);
        let shouldRenderComments = (this.props.openedStory === this.props.item.id);
        let icon = this.computeIcon(item);
        let state = item.url ? "" : "disabled";

         return (<div>
          <div className={`btn btn-outline-warning ${state}`}
               onClick={() => {item.url && this.props.bookmarkAction(item)}} disabled={!item.url}>
            <FontAwesomeIcon icon={icon} />
          </div>
          {points} points by {item.by} |
          {postDate} | <span className="Comment" onClick={() => {
            this.props.changeOpenedStory(item.id);}}> {comments} comments
          </span>
          {shouldRenderComments && <CommentListComponent key={item.id}
                                                         kids={item.kids}
                                                         depth={ROOT_DEPTH}
                                                         expanded={true}
                                                         hideReplies={true}/>}
         </div>);
      } else {
        return <div>No data available.</div>
      }
    }
}

export default SummaryComponent;