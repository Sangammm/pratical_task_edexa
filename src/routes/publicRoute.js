import React from "react";
import { Redirect } from "react-router";
import { allRoutes } from "./index";

const PublicRoute = ({ component: Component }) => {
  if ("checkAuth") {
    return <Redirect to={allRoutes.home.path} />;
  }
  return <Component />;
};

export default PublicRoute;
