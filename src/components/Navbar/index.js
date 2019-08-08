import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navbar.css';
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Navbar className="nav">
        <NavLink exact to="/" activeClassName="active">Schedule2Work</NavLink>
        <NavLink to="/Profile" activeClassName="active">Profile</NavLink>
        <NavLink to="/Manager" activeClassName="active">Manager</NavLink>
        <NavLink to="/Login" activeClassName="active">Login</NavLink>
      </Navbar>

    );
  }
}
export default NavBar;