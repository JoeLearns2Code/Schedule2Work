import React from "react";
// //import css
// import "./style.css";
//import bootstrap elements
import { ListItem } from "../List";
import { Row, Col } from "../Grid";


function ShiftGeneral({ shiftDate, handleShiftDetails }) {
    return (
        <ListItem>
            {/* TODO: add onClick=  function to get shift details */}
            <div className="card" onClick={handleShiftDetails}>
            <Row className="d-flex flex-row-reverse">
                <Col size="md-6-sm-4">
                    <h5>Date: {shiftDate}</h5>
                
                </Col>
            </Row>
            </div>
        </ListItem>
    );
};


export default ShiftGeneral;