import React, { Component } from 'react';
import LoginForm from './LoginForm';
import './Login.css';

//Import API methods
import API from "../../utils/API"


class LoginPage extends Component {

    state = {
    
    email: "",
    password: ""

    }

    //handleInputChange method
    handleInputChange = event => {
        const { name, value } = event.target;
        // console.log("working");
        this.setState({
            [name]: value
        });
        console.log(value);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("FORM SUBMIT!");
        API.login({
            

        }) 
        
    }

    render() {
        return (
        <div className="LoginPage">
            <LoginForm 
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            email={this.state.email}
            password={this.state.password}
            
            />
            
        </div>
        );
    }
}


export default LoginPage;
