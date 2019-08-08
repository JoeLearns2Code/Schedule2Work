import React, { Component } from "react";
//Import bootstrap elements
import { Row, Col } from "../Grid";
import Card from "../Card";
//import css
import "./style.css";

class ShiftDetail extends Component {

    //TODO: Create a method to render data in the table columns


    render() {
        return (
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
}

export default ShiftDetail;