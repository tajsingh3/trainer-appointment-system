import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { connect } from "react-redux";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import { startAddAppointment } from "../actions/appointments";
import RecentAppointmentsList from "./RecentAppointmentsList";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  fab: {
    margin: theme.spacing.unit
  }
});

class AppointmentSchedularForm extends Component {
  state = {
    date: moment(),
    focused: false,
    time: moment().format("H:mm"),
    appointments: []
  };

  onSubmit = e => {
    e.preventDefault();

    const fullDate = `${this.state.date.format("YYYY-MM-DD")} ${
      this.state.time
    }:00:00`;
    const selectedDate = moment(fullDate);

    this.setState(prevState => {
      return {
        appointments: [...prevState.appointments, selectedDate.format("dddd, MMMM Do YYYY h:mm a")]
      };
    });

    const appointment = { id: 0, date: selectedDate, status: "available" };
    this.props.dispatch(startAddAppointment(appointment, "available"));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="appointment-scheduler-form-container">
        <form onSubmit={this.onSubmit} className="form">
          <div className="form__input">
            <SingleDatePicker
              date={this.state.date} // momentPropTypes.momentObj or null
              onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
              id="your_unique_id" // PropTypes.string.isRequired,
              numberOfMonths={1}
              required
            />
          </div>
          <div className="form__input">
            <TextField
              id="time"
              label="Appointment Time"
              type="time"
              value={this.state.time}
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
              onChange={e => {
                let time = e.target.value;
                this.setState(() => ({ time }));
              }}
            />
          </div>
          <div className="form__input">
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Create
            </Button>
          </div>
        </form>
        <div className="recent-appointments-list">
          <RecentAppointmentsList appointments={this.state.appointments}/>
        </div>
      </div>
    );
  }
}

AppointmentSchedularForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect()(AppointmentSchedularForm));
