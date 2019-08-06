import React, { Component } from "react";
import AddEmployee from "../components/AddEmployee";
import AddShift from "../components/AddShift";
import ShiftCalendar from "../components/ShiftCalendar";
import Card from "../components/Card";
import ShiftGeneral from "../components/ShiftGeneral";
import ShiftDetail from "../components/ShiftDetail";

//Import bootstrap elements
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";


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
        foodCert: "",

        shifts: []
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
                        <AddEmployee />
                    </Col>
                    <Col size="md-6">
                        <AddShift />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="This Week's Schedule">
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
            </Container>
        )
    }
}

export default Manager;