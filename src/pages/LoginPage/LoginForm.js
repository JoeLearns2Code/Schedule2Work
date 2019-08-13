import React from 'react';
import { Card, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './Login.css';

//Import bootstrap elements
import { Row, Col } from "../../components/Grid";


const divStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: -100
};

const panelStyle = {
    backgroundColor: "white",
    border: 0,
    paddingLeft: 20,
    paddingRight: 20,
    width: 300,
    paddingBottom: 20
};

const buttonStyle = {
    marginBottom: 0
};

function LoginForm({ handleFormSubmit, handleInputChange, email, password, message }) {



    return (
        <div style={divStyle}>
            <Row>
            <h2 className="messageheader">{message}</h2>
            </Row>
            <br />
            <Row>
                <Col size="md-12">
            <Card style={panelStyle}>
                <Form horizontal="true" className="LoginForm" id="loginForm">
                    <FormGroup controlId="formEmail">
                        <FormControl type="email" placeholder="Email Address"
                            value={email}
                            onChange={handleInputChange}
                            name="email"
                        />
                    </FormGroup>
                    <FormGroup controlId="formPassword">
                        <FormControl type="password" placeholder="Password"
                            value={password}
                            onChange={handleInputChange}
                            name="password"
                        />
                    </FormGroup>
                    <FormGroup style={buttonStyle} controlId="formSubmit">
                        <Button type="submit" onClick={handleFormSubmit}>
                            Login</Button>
                    </FormGroup>
                </Form>
            </Card>
            </Col>
            </Row>
        </div>
    )
}


export default LoginForm;
