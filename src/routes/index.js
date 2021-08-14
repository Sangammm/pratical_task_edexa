import React from "react";

export const allRoutes = {
  login: {
    name: "Login",
    path: "/login",
    secure: false,
    static: false,
    component: React.lazy(() => import("../pages/login/login")),
  },
  signup: {
    name: "Signup",
    path: "/signup",
    secure: false,
    static: false,
    component: React.lazy(() => import("../pages/signup/signup")),
  },
  home: {
    name: "Home",
    path: "/",
    secure: true,
    static: false,
    component: React.lazy(() => import("../pages/home/home")),
  },
  new: {
    name: "new User",
    path: "/new",
    secure: true,
    static: false,
    component: React.lazy(() => import("../pages/newUser/newUser")),
  },
};
