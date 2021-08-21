import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const PrivateRoute = (props) => {
  const context = useContext(AuthContext);
  const { component: Component, ...rest } = props;

  return context.isAuthenticated ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: props.location },
      }}
    />
  );
};

export default PrivateRoute;
