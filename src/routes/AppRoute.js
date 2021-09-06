import React, { Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import history from "../utils/history";
import RouteWithSubRoutes from "./RouteWithSubRoutes";
import Header from "../components/Header";

const AppRoutes = (props) => {
  return (
    <React.Fragment>
      <div className="container-app">
        <Header />
        <div id="dashboard-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Router history={history}>
              <Switch>
                {props.routes.map((route) => (
                  <RouteWithSubRoutes key={route.path} {...route} />
                ))}
                <Redirect to="event-list" />
              </Switch>
            </Router>
          </Suspense>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppRoutes;
