import React, { Component } from "react";
import Employee from "../components/Employee";
import SearchBar from "../components/SearchBar";

//Import bootstrap elements
import { Col, Row, Container } from "../components/Grid";

class Profile extends Component {

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

    //handleInputChange method
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //Event function when the search button is clicked.
    handleFormSubmit = event => {
        event.preventDefault();

    };

    render() {
        return (
            <Container>
            <h1>Profile page</h1>
            <Row>
            <Col size="md-4">
            <SearchBar />
            </Col>
            </Row>
            <Employee />
            </Container>

        )
    }
}

export default Profile;