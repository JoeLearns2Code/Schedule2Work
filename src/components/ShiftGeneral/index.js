import React from "react";

//import bootstrap elements
import { ListItem } from "../List";
import { Row, Col } from "../Grid";


function ShiftGeneral({ firstNameShift, handleShiftDetails }) {
    return (
        <ListItem>
            {/* TODO: add onClick=  function to get shift details */}
            <div className="card" onClick={handleShiftDetails}>
            <Row className="d-flex flex-row-reverse">
                <Col size="md-4">
                    <h5>Employee Name: {firstNameShift}</h5>
                
                </Col>
            </Row>
            </div>
        </ListItem>
    );
};


export default ShiftGeneral;