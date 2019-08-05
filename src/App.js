import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/Home';
import LoginPage from './pages/LoginPage';
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import './App.css';

const Home = () => (
  <HomePage />
);

const Login = () => (
  <LoginPage />
);

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/manager" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
