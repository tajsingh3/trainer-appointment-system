import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";

import { selectAppointmentsByDay, selecteAvailableAppointments } from "../selectors/appointments";

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
            <Appointment date={appointment.date} />
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
  console.log(state.filters.isAvailableAppointmentsPage);
  if(props.isAvailableAppointmentsPage){
    filteredAppointments = selecteAvailableAppointments(state.availableAppointments,state.filters);
  }
  filteredAppointments = selectAppointmentsByDay(filteredAppointments, props.day);

  return {
    appointments: filteredAppointments
  };
};

export default withStyles(styles)(connect(mapStateToProps)(SimpleList));
