import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Manager from "./pages/Manager";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";

import Login from "./pages/LoginPage/Login";
import './App.css';
import Navbar from "./components/Navbar";



function App() {
  return (
    <Router>
      <div>
        {<Navbar /> }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/manager" component={Manager} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
