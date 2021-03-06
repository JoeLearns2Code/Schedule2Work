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
        //States for Employee table
        firstName: "",
        lastName: "",
        address: "",
        startDate: "",
        dateofBirth: "",
        certDate: "",
        certType: "",
        email: "",
        phone: "",
        roles: "",
        password: "",

        //States for Shift table
        shiftDate: "",
        startTime: "",
        endTime: "",
        empID: "",
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
        workdays: [],

        //Message states

        message: "",
        empMessage: ""
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

    //Event function when add employees button is clicked.
    handleEmployeeSubmit = event => {
        event.preventDefault();
        console.log("click");
        this.handleEmployeeAdd();

    };

    //TODO: Make a POST request to send new employee data to the server
    handleEmployeeAdd = () => {
        API.addEmployee({
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            startdate: this.state.startDate,
            birthdate: this.state.dateofBirth,
            certifytype: this.state.certType,
            certifydate: this.state.certDate,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            address: this.state.address,
            roles: this.state.roles
        }).then(() => {
            console.log("employee successfully added");
            this.setState({
                firstName: "",
                lastName: "",
                address: "",
                startDate: "",
                dateofBirth: "",
                certDate: "",
                certType: "",
                email: "",
                phone: "",
                roles: "",
                password: ""

            })
        })
            .catch(() => {
                console.log("Add employees failed")
            })
    };

    //Event function when the add shift button is clicked.
    handleShiftSubmit = event => {
        event.preventDefault();
        console.log("click");
        this.handleShiftAdd();

    };

    //Make a POST request to send new employee data to the server
    handleShiftAdd = () => {
        API.addShift({
            date: this.state.shiftDate,
            starttime: this.state.startTime,
            endtime: this.state.endTime,
            id: this.state.empID,
            
        }).then(() => {
            console.log("Shift successfully added.")
            this.setState({
                shiftDate: "",
                startTime: "",
                endTime: "",
                empID: ""

            })
        })
            .catch(() => {
                console.log("Add shifts failed")
            })
    };


    //Event function when the Get Employees button is clicked.
    handleEmployeeGet = event => {
        event.preventDefault();
        this.handleAllEmployees();
        // console.log("click");

    };

    //Make a GET request to list all employees in the AllEmployees element
    handleAllEmployees = event => {
        API.getAllEmployees()
            .then(res =>
                this.setState({
                    employees: res.data
                })
            )
            .catch(() =>
                this.setState({
                    employees: [],
                    messageEmp: "No Employees Found"
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
        API.deleteEmployee(id)
            .then(() =>
                console.log("employee deleted"),
                this.handleAllEmployees()
            )
            .catch(() => {
                console.log("Delete employee failed")
            })
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
        // console.log("click");
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
                            roles={this.state.roles}
                            password={this.state.password}
                        />
                    </Col>
                    <Col size="md-6">
                        <AddShift
                            handleInputChange={this.handleInputChange}
                            handleShiftSubmit={this.handleShiftSubmit}
                            shiftDate={this.state.shiftDate}
                            startTime={this.state.startTime}
                            endTime={this.state.endTime}
                            empID={this.state.empID}
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
                                            key={data.ShiftId}
                                            shiftDate={data.Date}
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
                        <button onClick={this.handleEmployeeGet}
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
                                            roles={data.Roles}
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
                                    <h2 className="text-center">{this.state.messageEmp}</h2>
                                )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Manager;