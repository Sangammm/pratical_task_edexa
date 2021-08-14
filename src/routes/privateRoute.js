import React from "react";
import { Redirect } from "react-router";
import { allRoutes } from ".";

const PrivateRoute = ({ component: Component }) => {
  if (!"checkAuth") {
    return <Redirect to={allRoutes.login.path} />;
  }
  return <Component />;
};

export default PrivateRoute;
