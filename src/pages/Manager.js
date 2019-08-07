import React, { Component } from "react";
import AddEmployee from "../components/AddEmployee";
import AddShift from "../components/AddShift";
import ShiftCalendar from "../components/ShiftCalendar";
import Card from "../components/Card";
import ShiftGeneral from "../components/ShiftGeneral";
import ShiftDetail from "../components/ShiftDetail";
import AllEmployees from "../components/AllEmployees";

//Import bootstrap elements
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

//Import API methods
import API from "../utils/API";


class Manager extends Component {
    //state object for page functions
    state = {
        firstName: "",
        lastName: "",
        address: "",
        startDate: "",
        dateofBirth: "",
        certDate: "",
        certType: "",
        email: "",
        phone: "",
        password: "",

        employees: [],
        shifts: []
    };

    //Class functions

    //handleInputChange method
    handleInputChange = event => {
        const { name, value } = event.target;
        // console.log("working");
        this.setState({
            [name]: value
        });
        console.log(value);
    };

    //Event function when the submit button is clicked.
    handleEmployeeSubmit = event => {
        event.preventDefault();
        console.log("click");

    };

    //TODO: Make a POST request to send new employee data to the server
    handleEmployeeAdd = () => {
        API.addEmployee({
            
        })
    };


    // //function to get shifts and put them in the shifts state array
    // getShifts = () => {
    //     API.getShifts()
    //         .then(res =>
    //             this.setState({
    //                 shifts: res.data
    //             })
    //         )
    //         //If no new books are found based on the query, provide message string
    //         .catch(() =>
    //             this.setState({
    //                 shifts: [],
    //                 message: "No shifts found!"
    //             })
    //         );
    // };


    render() {
        return (
            <Container>
                <h1>Manager page</h1>
                <Row>
                    <ShiftCalendar />
                </Row>
                <Row>
                    <Col size="md-6">
                        <AddEmployee 
                        handleInputChange={this.handleInputChange}
                        handleEmployeeSubmit={this.handleEmployeeSubmit}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        address={this.state.address}
                        startDate={this.state.startDate}
                        dateofBirth={this.state.dateofBirth}
                        certDate={this.state.certDate}
                        certType={this.state.certType}
                        email={this.state.email}
                        phone={this.state.phone}
                        password={this.state.password}
                        />
                    </Col>
                    <Col size="md-6">
                        <AddShift 
                        
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="weeklyschedule">
                            {/* Create a ShiftGeneral element for each result returned */}
                            <List>
                                <ShiftGeneral />
                            </List>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <ShiftDetail />
                </Row>
                <Row>
                    <Col size="md-12">
                        <h2>Employee Information:</h2>
                        <Card title="employeelist">
                            {/* {this.state.employees.length ? (
                                <List>
                                    
                                </List>
                            )} */}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Manager;