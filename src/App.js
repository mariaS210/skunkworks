import React from 'react';
import ItemListComponent from './components/list/ItemListComponent'

// React Bootrap Navigation bar
// order matters.
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router className="App">
      <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">HackerNews</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/skunkworks/top">Top</Nav.Link>
          <Nav.Link href="/skunkworks/new">New</Nav.Link>
          <Nav.Link href="/skunkworks/best">Best</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Top</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">New</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Controversial</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Navbar>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/skunkworks/top">
            <ItemListComponent endpoint="topstories"/>
          </Route>
          <Route path="/skunkworks/new">
            <ItemListComponent endpoint="newstories"/>
          </Route>
          <Route path="/skunkworks/best">
            <ItemListComponent endpoint="beststories"/>
          </Route>
          <Route path="/skunkworks">
            <Redirect to="/skunkworks/top"></Redirect>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
