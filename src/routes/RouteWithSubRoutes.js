import React from "react";
import history from "../utils/history";
import { Router, Route } from "react-router-dom";
// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
const RouteWithSubRoutes = (route) => {
  return (
    <>
      <Router history={history}>
        <Route
          path={route.path}
          render={(props) => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
          )}
        />
      </Router>
    </>
  );
};

export default RouteWithSubRoutes;
