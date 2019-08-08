import React from "react";
//Import bootstrap elements
import { Row, Col } from "../Grid";
//import css
import "./style.css";

function ShiftDetail({ startTime}) {
    return(
        <Row>
        <Col size="md-12">
        <h3>Shift Details:</h3>
        <table>
        <tbody>
            <tr>
                <th>Time:</th>
                <th>Employee:</th>
                <th>Role:</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        </table>
        </Col>
        </Row>
    );
}

export default ShiftDetail;