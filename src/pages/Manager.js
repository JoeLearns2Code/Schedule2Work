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

        shiftDate: "",
        startTime: "",
        endTime: "",
        roleName: "",
        proficiencyLevel: "",
        firstNameShift: "",
        lastNameShift: "",
        phoneShift: "",
        shiftID: "",

        //Separate states for shift detail view
        startTimeD: "",
        endTimeD: "",
        roleNameD: "",
        proficiencyLevelD: "",
        firstNameShiftD: "",
        lastNameShiftD: "",
        phoneShiftD: "",

        employees: [],
        shifts: [],
        filteredShift: ["test"],
        workdays: []
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

    //Event function when the submit button is clicked.
    handleShiftSubmit = event => {
        event.preventDefault();
        console.log("click");

    };

    //TODO: Make a POST request to send new employee data to the server
    handleShiftAdd = () => {
        API.addShift({

        })
    };



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

    //Function to delete employee from database
    handleEmployeeDelete = id => {
        API.deleteEmployee(id).then(res => this.getAllEmployees());
    };


    //Load shifts
    componentDidMount() {
        this.handleGetShifts();
    }

    //function to get shifts and put them in the shifts state array
    handleGetShifts = () => {
        API.getShifts()
            .then(res =>
                this.setState({
                    shifts: res.data[0].Shifts,
                    workdays: res.data
                })
            )
            //If no new shifts are found based on the query, provide message string
            .catch(() =>
                this.setState({
                    shifts: [],
                    message: "No shifts found!"
                })
            );
    };

    //Event function for bringing up Shift Details
    handleShiftDetails = event => {
        event.preventDefault();
        console.log("click");
        let selectedShift = this.state.shifts[0].ShiftID
        this.filterShift(selectedShift);

    }
    
    //Filter shift to view details by id
    filterShift(filterItem) {
        this.setState({ filteredShift: this.state.shifts.filter(shifts => shifts.ShiftID === filterItem) },
            () => this.setState({
                startTimeD: this.state.filteredShift[0].StartTime,
                endTimeD: this.state.filteredShift[0].EndTime,
                roleNameD: this.state.filteredShift[0].RoleName,
                proficiencyLevelD: this.state.filteredShift[0].ProficiencyLevel,
                firstNameShiftD: this.state.filteredShift[0].FirstName,
                lastNameShiftD: this.state.filteredShift[0].LastName,
                phoneShiftD: this.state.filteredShift[0].Phone
            }));
        //after state is set, run get shifts again to re-populate
        this.handleGetShifts();
    }


    render() {
        return (
            <Container>
                <h1>Manager page</h1>
                <Row>
                    <ShiftCalendar
                    startTime={this.state.startTime}
                    firstNameShift={this.state.firstNameShiftD}
                    roleName={this.state.roleName}
                    />
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
                            handleInputChange={this.handleInputChange}
                            handleShiftSubmit={this.handleShiftSubmit}
                            startTime={this.state.startTime}
                            endTime={this.state.endTime}
                            roleName={this.state.roleName}
                            proficiencyLevel={this.state.proficiencyLevel}
                            firstNameShift={this.state.firstNameShift}
                            lastNameShift={this.state.lastNameShift}
                            phoneShift={this.state.phoneShift}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Card title="weeklyschedule">
                            {/* Create a ShiftGeneral element for each result returned */}
                            {this.state.workdays.length ? (
                                <List>
                                    {this.state.workdays.map(data => (
                                        <ShiftGeneral
                                            key={data}
                                            shiftDate={data.Date}
                                            shiftID={data.Shifts.ShiftId}
                                            handleShiftDetails={this.handleShiftDetails}
                                        />
                                    ))}
                                </List>
                            ) : (
                                    <h2 className="text-center">{this.state.message}</h2>
                                )}
                        </Card>
                    </Col>
                    <Col size="md-6">
                        <ShiftDetail
                            startTimeD={this.state.startTimeD}
                            endTimeD={this.state.endTimeD}
                            roleNameD={this.state.roleNameD}
                            proficiencyLevelD={this.state.proficiencyLevelD}
                            firstNameShiftD={this.state.shifts.FirstNameD}
                            lastNameShiftD={this.state.lastNameShiftD}

                        />
                    </Col>
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