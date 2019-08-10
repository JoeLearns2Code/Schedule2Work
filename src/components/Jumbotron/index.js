import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
// import { NavLink } from "react-router-dom";
import {  Button } from 'reactstrap';

import "./style.css";

const Jumbotron = () => {
return (
    <MDBJumbotron fluid>
    <MDBContainer>
            <h2 className="display-4">Scheduling App for all Devices.</h2>
            <p className="lead">
                <Button href="manager">Start Scheduling</Button>
                {/* <Button color="primary">Start Scheduling</Button> */}
            </p>
        </MDBContainer>
    </MDBJumbotron>
    );
};

export default Jumbotron;
