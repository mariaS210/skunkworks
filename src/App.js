import React from 'react';

// React Bootrap Navigation bar
// order matters.
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
import { faFilter, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

import './App.css';
import TopStoriesComponent from './components/list/TopStoriesComponent';
import BestStoriesComponent from './components/list/BestStoriesComponent';
import NewStoriesComponent from './components/list/NewStoriesComponent';

library.add(faFilter, faThumbsUp, fab);


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: "",
      endpoint: "topstories",
    }
  }

  handleChange(event) {
    this.setState({term: event.target.value})
  }

  render() {
    return (
      <Router className="App">
        <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand as={Link} to="/top" className="btn btn-outline-warning">
          <FontAwesomeIcon icon={["fab", "hacker-news-square"]}/> Hacker News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/top" onClick={() => {this.setState({endpoint: "topstories"})}} className="nav-link">Top</Link>
            <Link to="/new" onClick={() => {this.setState({endpoint: "newstories"})}} className="nav-link">New</Link>
            <Link to="/best" onClick={() => {this.setState({endpoint: "beststories"})}} className="nav-link">Best</Link>
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
        </Navbar>
          <Switch>
            <Route exact path="/top"  render={(props) => <TopStoriesComponent {...props} searchTerm={this.state.term} />} />
            <Route exact path="/new"  render={(props) => <NewStoriesComponent {...props} searchTerm={this.state.term} />} />
            <Route exact path="/best" render={(props) => <BestStoriesComponent {...props} searchTerm={this.state.term} />} />
            <Route exact path="/" component={TopStoriesComponent} />
          </Switch>
      </Router>
    );
  }
}

export default App;
