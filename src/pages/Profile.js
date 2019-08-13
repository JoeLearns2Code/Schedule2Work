import React, { Component } from "react";
import Employee from "../components/Employee";
import SearchBar from "../components/SearchBar";

//Import bootstrap elements
import { Col, Row, Container } from "../components/Grid";

//Import API methods
import API from "../utils/API";

import "./Profile.css"

class Profile extends Component {

    state = {
        id: "",
        employee: [],
        message: "",

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
        console.log(value);
    };

    //Event function when the search button is clicked.
    handleFormSubmit = event => {
        event.preventDefault();
        this.getEmployee()
        console.log("click");
    };

    //Get Employee by ID
    getEmployee = () => {
        API.getEmployee(this.state.id)
            .then(res =>
                this.setState({
                    employee: res.data
                }, () =>
                        this.setState({
                            firstName: this.state.employee.FirstName,
                            lastName: this.state.employee.LastName,
                            address: this.state.employee.Address,
                            startDate: this.state.employee.StartDate,
                            dateofBirth: this.state.employee.DOB,
                            certDate: this.state.employee.CertExpDate,
                            certType: this.state.employee.CertType,
                            email: this.state.employee.Email,
                            phone: this.state.employee.Phone
                        })
                )
            )
            //If no employee found, provide message state
            .catch(() =>
                this.setState({
                    employee: [],
                    message: "No Employee Found"
                })
            );
        console.log("this function was called")
    };




    render() {
        return (
            <div class="Profile">
            <Container>
                <div className="componentwindow">
                <h1 className="profileheadline">Profile page</h1>
                <Row>
                    <Col size="md-4">
                        <SearchBar
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            id={this.state.id}
                        />
                    </Col>
                    <Col size="md-6">
                        <Employee
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            address={this.state.address}
                            startDate={this.state.startDate}
                            dateofBirth={this.state.dateofBirth}
                            certType={this.state.certType}
                            certDate={this.state.certDate}
                            email={this.state.email}
                            phone={this.state.phone}
                        />
                    </Col>
                </Row>
                </div>
            </Container>
            </div>

        )
    }
}



export default Profile;