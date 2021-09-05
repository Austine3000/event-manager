import React, { Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import RouteWithSubRoutes from "./routes/RouteWithSubRoutes";
import ErrorBoundary from "./config/ErrorBoundary";
import { ThemeProvider } from "styled-components";
import { AppTheme } from "./utils/theme";
import Routes from "./routes/Routes";
import history from "./utils/history";
import "./App.css";

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={AppTheme}>
        <Suspense fallback={<div data-testid="loading">Loading...</div>}>
          <Router history={history}>
            <Switch>
              {Routes.map((route) => (
                <RouteWithSubRoutes key={route.path} {...route} />
              ))}
              <Redirect to="/login" />
            </Switch>
          </Router>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
