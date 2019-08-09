import React from "react";
//Import bootstrap elements
import { Row, Col, Container } from "../Grid";
import Card from "../Card";
//import css
import "./style.css";

function ShiftDetail({ firstNameShiftD, lastNameShiftD, startTimeD, endTimeD, roleNameD, proficiencyLevelD }) {

        return (
            <Container>
            <Row>
                <Col size="md-12-sm-4">
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
                                    <td>{firstNameShiftD} {lastNameShiftD}</td>
                                    <td>{startTimeD} - {endTimeD}</td>
                                    <td>{roleNameD}</td>
                                    <td>{proficiencyLevelD}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </Col>
            </Row>
            </Container>
        );
    
};

export default ShiftDetail;