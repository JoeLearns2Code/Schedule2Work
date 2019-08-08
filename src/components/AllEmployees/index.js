import React from "react";

//import bootstrap elements
import { ListItem } from "../List";
import { Row, Col } from "../Grid";


function AllEmployees({ firstName, lastName, address, startDate, dateofBirth, certDate, certType, email, phone, Button}) {
    return (
        <ListItem>
            <Row className="d-flex flex-row-reverse">
                <Col size="md-6">
                    <h4>Employee Name: {firstName} {lastName}</h4>
                    <br/>
                    <p><strong>Address: </strong>{address}</p>
                    <p><strong>Date of Hire: </strong>{startDate}</p>
                    <p><strong>Date of Birth: </strong>{dateofBirth}</p>
                    <p><strong>Date of Certification: </strong>{certDate}</p>
                    <p><strong>Certifcation Type: </strong>{certType}</p>
                    <p><strong>Email Address: </strong>{email}</p>
                    <p><strong>Phone Number: </strong>{phone}</p>
                    <Button />
                </Col>
            </Row>
        </ListItem>
    );
};


export default AllEmployees;