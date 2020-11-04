import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
  } from "react-router-dom";
import isUserLogin from '../Services/Authentication';

import Navbar from "../Components/Layout/Navbar";
import Sidebar from "../Components/Layout/Sidebar";
import Login from '../Components/Account/Login';
import Home from '../Components/Home/Home';
import About from '../Components/Home/About';

const RouterSetup = React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Sidebar>
          <Switch>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route
              exact
              path="/"
              render={() =>
                isUserLogin() ? <Home /> : <Redirect to="/Login" />
              }
            />
            <Route
              exact
              path="/About"
              render={() =>
                isUserLogin() ? <About /> : <Redirect to="/Login" />
              }
            />
          </Switch>
        </Sidebar>
      </Router>
    </div>
  );
};

export default RouterSetup;
