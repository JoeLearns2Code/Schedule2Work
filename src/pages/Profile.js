import React, { Component } from "react";
import Employee from "../components/Employee";
import SearchBar from "../components/SearchBar";

//Import bootstrap elements
import { Col, Row, Container } from "../components/Grid";

//Import API methods
import API from "../utils/API";

class Profile extends Component {

    state = {
        id: "",
        employee: [],
        
        firstName: "",
        lastName: "",
        address: "",
        startDate: "",
        dateofBirth: "",
        certDate: "",
        certType: "",
        email: "",
        phone: ""

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

    //Get Employee by ID
    getEmployee = () => {
        API.getEmployee(this.state.id)
    }


    render() {
        return (
            <Container>
            <h1>Profile page</h1>
            <Row>
            <Col size="md-4">
            <SearchBar 
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            id={this.state.id}
            />
            </Col>
            </Row>
            <Employee 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            address={this.state.address}
            startDate={this.state.startDate}
            dateofBirth={this.state.dateofBirth}
            certDate={this.state.certDate}
            certType={this.state.certType}
            email={this.state.email}
            phone={this.state.phone}
            />
            </Container>

        )
    }
}

export default Profile;