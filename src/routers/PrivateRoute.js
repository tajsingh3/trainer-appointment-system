import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = props => {
  const { isAuth, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuth: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
