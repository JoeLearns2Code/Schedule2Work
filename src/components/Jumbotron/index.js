import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import "./style.css";

const Jumbotron = () => {
return (
    <MDBJumbotron fluid>
    <MDBContainer>
            <h2 className="display-4">Scheduling App for all Devices.</h2>
        <p className="lead">
        Start Scheduling .
        </p>
        </MDBContainer>
    </MDBJumbotron>
    );
};

export default Jumbotron;
