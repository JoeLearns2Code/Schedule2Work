import React, { Component } from "react";
import AddEmployee from "../components/AddEmployee"
//Import bootstrap elements
import { Col, Row, Container } from "../components/Grid";


class Manager extends Component {
    //TODO: set state object for page functions
    state = {
        employeeName: "",
        address: "",
        birthdate: "",
        startDate: "",
        email: "",
        phone: ""
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
                    <AddEmployee />
                </Row>
            </Container>
        )
    }
}

export default Manager;