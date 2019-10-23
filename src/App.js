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

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">HackerNews</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
      <ItemListComponent/>
    </div>
  );
}

export default App;
