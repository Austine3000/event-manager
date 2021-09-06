import React from 'react';
import history from '../utils/history';
import { Router, Route, Redirect } from 'react-router-dom';

const RouteComponent = ({ route }) => {

  const token = ''

  return (
    <Router history={history}>
      <Route
        path={route.path}
        render={(props) =>
          token ? (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: route.location.pathname },
              }}
            />
          )
        }
      />
    </Router>
  );
};

export default RouteComponent;
