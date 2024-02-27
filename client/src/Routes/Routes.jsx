import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "../Layout/Home/Home";
import NavBar from "../Layout/NavBar/NavBar";
import ViewBasket from "../components/ViewBasket/ViewBasket";
import User from "../components/User/User";
import Success from "../components/Success/Success";


const Routes = ({ version }) => {
  return (
    <Fragment>
        <NavBar />
        <Switch>
        <Route 
            path="/" 
            render={() => <Home version={version} />} 
            exact 
          />
          <Route 
            path="/basket" 
            render={() => <ViewBasket version={version} />} 
            exact 
          />
          <Route 
            path="/user" 
            render={() => <User version={version} />} 
            exact 
          />
          <Route 
            path="/success" 
            render={() => <Success version={version} />} 
            exact 
          />
        </Switch>
      </Fragment>
  );
};

export default Routes;
