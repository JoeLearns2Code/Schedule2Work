import React, { Component } from 'react';
// import NavBar from "../../components/Navbar/Navbar";
import NavBar from '../../components/Navbar/index';
// import N

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <NavBar />
                {/* <h2>Home Page</h2> */}
            </div>
        );
    }
}

export default HomePage;