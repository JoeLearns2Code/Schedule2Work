import React from 'react';
import { Card, Form, FormGroup, FormControl, Button } from 'react-bootstrap';



const divStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: -100
};

const panelStyle = {
    backgroundColor: 'rgba(255,255,255,0.5)',
    border: 0,
    paddingLeft: 20,
    paddingRight: 20,
    width: 300,
};

const buttonStyle = {
    marginBottom: 0
};

function LoginForm({ handleFormSubmit, handleInputChange, email, password }) {


    
        return (
            <div style={divStyle}>
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
            </div>
        )
    }


export default LoginForm;
