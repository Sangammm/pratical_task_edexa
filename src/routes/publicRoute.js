import React from "react";
import { Redirect } from "react-router";
import { allRoutes, isAuthenticated } from "./index";

const PublicRoute = ({ component: Component }) => {
  if (isAuthenticated()) {
    return <Redirect to={allRoutes.home.path} />;
  }
  return <Component />;
};

export default PublicRoute;
