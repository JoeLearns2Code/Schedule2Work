import React, { Component } from 'react';
import LoginForm from './LoginForm';
import './Login.css';

//Import API methods
import API from "../../utils/API"


class LoginPage extends Component {

    state = {
    
    email: "",
    password: "",
    message: ""

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
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            console.log(response)
            if (response.status === 200) {
                console.log("Successfully logged in")
                this.setState({
                    message: "logged in Successfully!",
                    redirectTo: "/manager"
                })
            } else {
                console.log("Failed to log in")
                
            }

        }).catch(error => {
            console.log("Login error")
            console.log(error)
            this.setState({
                message: "login failed!"
            })
        })
    };


    render() {
        return (
        <div className="LoginPage">
            <LoginForm 
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            email={this.state.email}
            password={this.state.password}
            message={this.state.message}
            
            />
            
        </div>
        );
    }
}


export default LoginPage;
