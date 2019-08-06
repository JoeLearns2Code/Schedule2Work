import React from "react";

//import bootstrap elements
import { ListItem } from "../List";
import { Row, Col } from "../Grid";


function ShiftGeneral({ shiftName, shiftDetails }) {
    return (
        <ListItem>
            <Row className="d-flex flex-row-reverse">
                <Col size="md-2">
                    <h5>Shift Name: {shiftName}</h5>
                    <p>Shift Details: {shiftDetails}</p>
                </Col>
            </Row>
        </ListItem>
    );
};


export default ShiftGeneral;