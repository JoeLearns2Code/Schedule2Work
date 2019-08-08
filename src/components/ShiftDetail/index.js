import React from "react";
//Import bootstrap elements
import { Row, Col } from "../Grid";
import Card from "../Card";
//import css
import "./style.css";

function ShiftDetail({ startTime}) {
    return(
        <Row>
        <Col size="md-6">
        <Card>
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
        </Card>
        </Col>
        </Row>
    );
}

export default ShiftDetail;