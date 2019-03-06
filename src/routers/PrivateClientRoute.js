import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateClientRoute = props => {
  const { isTrainer, component: Component, ...rest } = props;
  const isClient = !isTrainer;
  return (
    <Route
      {...rest}
      render={props =>
        isClient ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const mapStateToProps = state => ({
  isTrainer: state.auth.isTrainer
});

export default connect(mapStateToProps)(PrivateClientRoute);
