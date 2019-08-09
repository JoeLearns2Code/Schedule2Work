import React from "react";
//Import bootstrap elements
import { Row, Col } from "../Grid";
import Card from "../Card";
//import css
import "./style.css";

function ShiftDetail({ firstNameShift, lastNameShift, startTime, endTime, roleName, proficiencyLevel }) {

        return (
            <Row>
                <Col size="md-12">
                    <Card>
                        <h3>Shift Details:</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Employee:</th>
                                    <th>Shift: </th>
                                    <th>Role:</th>
                                    <th>Proficiency: </th>
                                </tr>
                                <tr>
                                    <td>{firstNameShift} {lastNameShift}</td>
                                    <td>{startTime} - {endTime}</td>
                                    <td>{roleName}</td>
                                    <td>{proficiencyLevel}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </Col>
            </Row>
        );
    
};

export default ShiftDetail;