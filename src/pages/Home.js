import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron/index";
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                {/* <div className="HomePage">
                    <h2>Home Page</h2>
                </div> */}
                    <div>
                        
                        {this.props.children}
                    </div>
                    
                </Jumbotron>
                <Footer />
            </div>
            
        );
    }
}


export default Home;
