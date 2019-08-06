import React, { Component } from "react";
import AddEmployee from "../components/AddEmployee";
import AddShift from "../components/AddShift";
import ShiftCalendar from "../components/ShiftCalendar";

//Import bootstrap elements
import { Col, Row, Container } from "../components/Grid";


class Manager extends Component {
    //TODO: set state object for page functions
    state = {
        firstName: "",
        lastName: "",
        birthdate: "",
        startDate: "",
        email: "",
        phone: "",
        minHours: "",
        maxHours: "",
        foodCert: ""
    };

    //Class functions

    //handleInputChange method
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //Event function when the submit button is clicked.
    handleFormSubmit = event => {
        event.preventDefault();

    };


    render() {
        return (
            <Container>
                <h1>Manager page</h1>
                <Row>
                    <ShiftCalendar />
                </Row>
                <Row>
                    <Col size="md-6">
                        <AddEmployee />
                    </Col>
                    <Col size="md-6">
                        <AddShift />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Manager;