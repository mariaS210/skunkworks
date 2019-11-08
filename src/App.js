import React from 'react';

// React Bootrap Navigation bar
// order matters.
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import TopStoriesComponent from './components/list/TopStoriesComponent';
import BestStoriesComponent from './components/list/BestStoriesComponent';
import NewStoriesComponent from './components/list/NewStoriesComponent';

function App() {
  return (
    <Router className="App">
      <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">HackerNews</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/top" className="nav-link">Top</Link>
          <Link to="/new" className="nav-link">New</Link>
          <Link to="/best" className="nav-link">Best</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Navbar>
        <Switch>
          <Route exact path="/top"  component={TopStoriesComponent} />
          <Route exact path="/new"  component={NewStoriesComponent} />
          <Route exact path="/best" component={BestStoriesComponent} />
          <Route exact path="/"     component={TopStoriesComponent} />
        </Switch>
    </Router>
  );
}

export default App;
