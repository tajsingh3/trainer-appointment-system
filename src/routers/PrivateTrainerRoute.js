import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateTrainerRoute = props => {
  const { isTrainer, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props =>
        isTrainer ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const mapStateToProps = state => ({
  isTrainer: state.auth.isTrainer
});

export default connect(mapStateToProps)(PrivateTrainerRoute);
