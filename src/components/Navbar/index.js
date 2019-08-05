import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./Navbar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Schedule2Work</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">
            Home
          </NavItem>
          <NavItem eventKey={2} href="/login">
            Login
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;