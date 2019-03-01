import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";

import {
  selectAppointmentsByDay,
  selectAppointments
} from "../selectors/appointments";

import Appointment from "./Appointment";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper
  }
});

function SimpleList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <List component="nav">
        {props.appointments.map(appointment => (
          <ListItem button>
            <Appointment
              appointment={appointment}
              isAvailableAppointmentsPage={props.isAvailableAppointmentsPage}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
  let filteredAppointments;

  if (props.isAvailableAppointmentsPage) {
    const { availableStartDate, availableEndDate } = state.filters;
    filteredAppointments = selectAppointments(
      state.availableAppointments,
      availableStartDate,
      availableEndDate
    );
  } else {
    const { myStartDate, myEndDate } = state.filters;
    filteredAppointments = selectAppointments(
      state.myAppointments,
      myStartDate,
      myEndDate
    );
  }

  filteredAppointments = selectAppointmentsByDay(
    filteredAppointments,
    props.day
  );

  return {
    appointments: filteredAppointments
  };
};

export default withStyles(styles)(connect(mapStateToProps)(SimpleList));
