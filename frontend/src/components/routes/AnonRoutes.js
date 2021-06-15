import React from 'react';
import { Redirect, Route } from 'react-router';
import { withAuth } from '../../context/auth.context';

function AnonRoute(routeProps) {
  const { isLoggedIn, isLoading } = routeProps;

  const { exact, path, redirectPath = '/' } = routeProps;
  const ComponentToShow = routeProps.component;

  if (isLoading) return <p>Loading...</p>;
  return (
    <Route
      exact={exact}
      path={path}
      render={function (props) {
        if (isLoggedIn) return <Redirect to={redirectPath} />;
        else if (!isLoggedIn) return <ComponentToShow {...props} />;
      }}
    />
  );
}

export default withAuth(AnonRoute);
