import React from 'react';
import Toast from 'react-bootstrap/Toast';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class BookmarkListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shown: Array(this.props.bookmarks.length).fill(true)
        };
    }

    handleClose(index) {
        let shown = this.state.shown.slice(0);
        shown.splice(index, 1);
        this.props.bookmarks.splice(index, 1);
        this.setState({
            shown: shown,
        });
    }

    render() {
        let bookmarks = this.props.bookmarks;
        if (!bookmarks) {
            return (null);
        }
        return (<div
                style={{
                position: 'absolute',
                top: 70,
                right: 0,
                }}
            >
                {bookmarks && bookmarks.map((item, index) => (
                <Toast key={index} show={this.state.shown[index]} onClose={()=>{this.handleClose(index)}}>
                <Toast.Header>
                    <FontAwesomeIcon icon="bookmark" className="rounded mr-2" />
                    <span className="mr-auto"><a href={item.url}>{item.title}</a></span>
                </Toast.Header>
                </Toast>))}
        </div>);
    }
}

export default BookmarkListComponent;