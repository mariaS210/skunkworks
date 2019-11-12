import React from 'react';

// React Bootrap Navigation bar
// order matters.
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faBookmark, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

import './App.css';
import ItemListComponent from './components/list/ItemListComponent';
import BookmarkListComponent from './components/list/BookmarkListComponent';


library.add(faFilter, faBookmark, faAngleDown, faAngleUp, fab);


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: "",
      endpoint: "topstories",
      bookmarks: [],
    }
  }

  handleChange(event) {
    this.setState({term: event.target.value})
  }


  bookmarkAction = (item) => {
    if (item && item.url) {
        let existingBookmarks = this.state.bookmarks;
        if (! existingBookmarks.find((saved) => {return saved.url === item.url})) {
            this.setState({
                bookmarks: [...this.state.bookmarks, item],
            });
        }
    }
  }

  render() {
    let bookmarks = this.state.bookmarks;
    return (
      <Router className="App">
        <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand as={Link} to="/top" className="btn btn-outline-warning">
          <FontAwesomeIcon icon={["fab", "hacker-news-square"]}/> Hacker News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/top" className="nav-link">Top</Link>
            <Link to="/new" className="nav-link">New</Link>
            <Link to="/best" className="nav-link">Best</Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/ask">Ask</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/show">Show</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/job">Job</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
          <InputGroup className="mr-sm-2">
            <Button as={InputGroup.Prepend} variant="primary"><FontAwesomeIcon icon="filter" /></Button>
            <FormControl
              type="text"
              placeholder="Filter"              
              value={this.state.term}
              onChange={this.handleChange.bind(this)}
              aria-describedby="filter"
            ></FormControl>
          </InputGroup>
          </Form>
        </Navbar.Collapse>
        {bookmarks && <BookmarkListComponent bookmarks={bookmarks}/>}
        </Navbar>
          <Switch>
            <Route exact path="/top"
                   render={(props) => <ItemListComponent endpoint="topstories" key="topstories"
                                                         searchTerm={this.state.term}
                                                         bookmarkAction={this.bookmarkAction}/>} />
            <Route exact path="/new"
                   render={(props) => <ItemListComponent endpoint="newstories" key="newstories"
                                                         searchTerm={this.state.term}
                                                         bookmarkAction={this.bookmarkAction}/>} />
            <Route exact path="/best"
                   render={(props) => <ItemListComponent endpoint="beststories" key="beststories"
                                                         searchTerm={this.state.term}
                                                         bookmarkAction={this.bookmarkAction}/>} />
            <Route exact path="/ask"
                   render={(props) => <ItemListComponent endpoint="askstories" key="askstories"
                                                         searchTerm={this.state.term}
                                                         bookmarkAction={this.bookmarkAction}/>} />
            <Route exact path="/show"
                   render={(props) => <ItemListComponent endpoint="showstories" key="showstories"
                                                         searchTerm={this.state.term}
                                                         bookmarkAction={this.bookmarkAction}/>} />

            <Route exact path="/job"
                   render={(props) => <ItemListComponent endpoint="jobstories" key="jobstories"
                                                         searchTerm={this.state.term}
                                                         bookmarkAction={this.bookmarkAction}/>} />
            <Route exact path="/"
                   render={(props) => <ItemListComponent endpoint="topstories"  key="home"
                                                         searchTerm={this.state.term}
                                                         bookmarkAction={this.bookmarkAction}/>} />
          </Switch>
      </Router>
    );
  }
}

export default App;
