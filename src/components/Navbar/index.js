import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navbar.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand href="#home">Schedule2Work</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          Login : <a href="#login">:</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;