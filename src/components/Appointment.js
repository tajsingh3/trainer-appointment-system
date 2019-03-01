import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import { startSelectAppointment } from "../actions/appointments";

import "../styles/appointment.scss";

const styles = {
  root: {
    width: "100%",
    maxWidth: 500
  }
};

const Appointment = props => {
  const { classes } = props;

  return (
    <div className="appointment-container">
      <Typography variant="subtitle2" gutterBottom>
        {props.appointment.date.format("dddd, MMMM Do YYYY h:mm a")}
      </Typography>
      {props.isAvailableAppointmentsPage ? (
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={props.selectAppointment}
          disabled={props.isSelected}
        >
          Select
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={props.selectAppointment}
        >
          Cancel
        </Button>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    selectAppointment: () => dispatch(startSelectAppointment(props.appointment))
  };
};

const mapStateToProps = (state, props) => {
  const isSelected = props.appointment.status === "selected";
  return { isSelected };
};

Appointment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Appointment)
);
