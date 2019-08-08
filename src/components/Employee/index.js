import React from "react";
//Import bootstrap elements
import { Row, Col } from "../Grid";

function Employee({ firstName, lastName, address, startDate, dateofBirth, certDate, certType, email, phone}) {
    return(
        <Row>
        <Col size="md-6">
        <h3>Employee's Info:</h3>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Address: {address}</p>
        <p>Date of Birth: {dateofBirth}</p>
        <p>Date of Hire: {startDate}</p>
        <p>Email Address: {email}</p>
        <p>Phone Number: {phone}</p>
        <p>Certification Type: {certType}</p>
        <p>Certification Date: {certDate}</p>
        </Col>
        </Row>
    );
}

export default Employee;