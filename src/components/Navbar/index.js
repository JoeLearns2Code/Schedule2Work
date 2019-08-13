import React, { Component } from 'react';
import { Navbar,   } from 'react-bootstrap';
import './Navbar.css';
import { NavLink } from "react-router-dom";
// import img from "../../img/logo.png";

class NavBar extends Component {
  render() {
    return (
      <Navbar className="nav">
        <NavLink exact to="/" activeClassName="active">Schedule2Work</NavLink>
        <NavLink to="/Profile" activeClassName="active">Profile</NavLink>
        <NavLink to="/Manager" activeClassName="active">Manager</NavLink>
        <NavLink to="/Login" activeClassName="active">Login</NavLink>
        
        {/* { <span class="logo">
          <a href="/">
            <img src="/img/logo.jpg" height="33" width="120" alt="#" /></a>
        </span>
          } */}

      </Navbar>

    );
  }
}
export default NavBar;