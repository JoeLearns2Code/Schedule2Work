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

    //TODO: Determine if we want to GET employees on componentDidMount or by button press

    //Make a GET request to list all employees in the AllEmployees element
    handleAllEmployees = event => {
        event.preventDefault();
        API.getAllEmployees()
            .then(res =>
                this.setState({
                    employees: res.data
                })
            )
            .catch(() =>
                this.setState({
                    employees: [],
                    message: "No Employees Found"
                })
            );
    };

    //Clear employee list from state array
    handleClearEmployees = event => {
        event.preventDefault();
        this.setState({
            employees: []
        })
    };

    //TODO: function to delete employee from database
    handleEmployeeDelete = id => {
        API.deleteEmployee(id).then(res => this.getAllEmployees());
    };

    //function to get shifts and put them in the shifts state array
    getShifts = () => {
        API.getShifts()
            .then(res =>
                this.setState({
                    shifts: res.data
                })
            )
            //If no new books are found based on the query, provide message string
            .catch(() =>
                this.setState({
                    shifts: [],
                    message: "No shifts found!"
                })
            );
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
                        <button onClick={this.handleAllEmployees}
                            type="submit">Get Employees</button><button onClick={this.handleClearEmployees}
                            type="submit">Clear Employees</button>
                        <Card title="employeelist">
                            {this.state.employees.length ? (
                                <List>
                                    {this.state.employees.map(data => (
                                        <AllEmployees
                                            key={data.id}
                                            firstName={data.FirstName}
                                            lastName={data.LastName}
                                            address={data.Address}
                                            dateofBirth={data.DOB}
                                            startDate={data.StartDate}
                                            email={data.Email}
                                            phone={data.Phone}
                                            certType={data.CertType}
                                            certDate={data.CertExpDate}
                                            Button={() => (
                                                <button
                                                    onClick={() => this.handleEmployeeDelete(data.id)}
                                                    className="btn btn-danger ml-d"
                                                >
                                                    Delete
                                                </button>
                                            )}
                                        />
                                    ))}
                                </List>
                            ) : (
                                    <h2 className="text-center">{this.state.message}</h2>
                                )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Manager;