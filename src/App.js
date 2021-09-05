import React, { Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import RouteWithSubRoutes from "./routes/RouteWithSubRoutes";
import ErrorBoundary from "./config/ErrorBoundary";
import Routes from "./routes/Routes";
import history from "./utils/history";
import "./App.css";

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div data-testid="loading">Loading...</div>}>
        <Router history={history}>
          <Switch>
            {Routes.map((route) => (
              <RouteWithSubRoutes key={route.path} {...route} />
            ))}
            <Redirect to="/home" />
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
