import React from "react";
//Import bootstrap elements
import { Row, Col } from "../Grid";

function Employee({ firstName, lastName, birthdate, startDate, email, phone, foodCert}) {
    return(
        <Row>
        <Col size="md-6">
        <h3>Employee's Info:</h3>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Date of Birth: {birthdate}</p>
        <p>Date of Hire: {startDate}</p>
        <p>Email Address: {email}</p>
        <p>Phone Number: {phone}</p>
        <p>Food Handler's Card Expiration Date: {foodCert}</p>
        </Col>
        </Row>
    );
}

export default Employee;