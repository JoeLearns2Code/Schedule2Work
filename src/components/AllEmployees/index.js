import React from "react";

//import bootstrap elements
import { ListItem } from "../List";
import { Row, Col } from "../Grid";


function AllEmployees({ firstName, lastName, address, startDate, dateofBirth, certDate, certType, email, phone}) {
    return (
        <ListItem>
            <Row className="d-flex flex-row-reverse">
                <Col size="md-6">
                    <h5>Employee Name: {firstName} {lastName}</h5>
                    <p>Address: {address}</p>
                    <p>Date of Hire: {startDate}</p>
                    <p>Date of Birth: {dateofBirth}</p>
                    <p>Date of Certification: {certDate}</p>
                    <p>Certifcation Type: {certType}</p>
                    <p>Email Address: {email}</p>
                    <p>Phone Number: {phone}</p>
                    
                </Col>
            </Row>
        </ListItem>
    );
};


export default AllEmployees;