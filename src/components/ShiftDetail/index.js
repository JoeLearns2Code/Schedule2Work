import React from "react";
//Import bootstrap elements
import { Row, Col } from "../Grid";

function ShiftDetail({ startTime, endTime}) {
    return(
        <Row>
        <Col size="md-6">
        <h3>Shift Details:</h3>
        <p>Start Time: {startTime}</p>
        <p>Start Time: {endTime}</p>
        </Col>
        </Row>
    );
}

export default ShiftDetail;