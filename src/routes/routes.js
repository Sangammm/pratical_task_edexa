import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { allRoutes } from "./index";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {Object.keys(allRoutes).map((key) => {
          const route = allRoutes[key];
          return (
            <Route
              path={route.path}
              exact={route.exact || true}
              key={route.path}
              render={() =>
                route.secure ? (
                  <PrivateRoute {...route} />
                ) : (
                  <PublicRoute {...route} />
                )
              }
            />
          );
        })}
      </Switch>
    </Router>
  );
};
