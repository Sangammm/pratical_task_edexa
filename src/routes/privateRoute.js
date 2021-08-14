import React from "react";
import { Redirect } from "react-router";
import { allRoutes, isAuthenticated } from ".";

const PrivateRoute = ({ component: Component }) => {
  if (!isAuthenticated()) {
    return <Redirect to={allRoutes.login.path} />;
  }
  return <Component />;
};

export default PrivateRoute;
