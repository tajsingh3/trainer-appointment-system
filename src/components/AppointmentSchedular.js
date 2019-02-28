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

import { addAppointment } from "../actions/appointments";

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

class AppointmentSchedular extends Component {
  state = {
    date: moment(),
    focused: false,
    time: moment().format("H:mm")
  };

  onSubmit = e => {
    e.preventDefault();

    const fullDate = `${this.state.date.format("YYYY-MM-DD")} ${
      this.state.time
    }:00:00`;
    const selectedDate = moment(fullDate);

    const appointment = { id: 0, date: selectedDate, status: "available" };
    this.props.dispatch(addAppointment(appointment, "available"));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <p>scheduar</p>
        <form onSubmit={this.onSubmit}>
          <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            id="your_unique_id" // PropTypes.string.isRequired,
            numberOfMonths={1}
            required
          />
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
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            type="submit"
          >
            Create
          </Button>
        </form>
      </div>
    );
  }
}

AppointmentSchedular.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect()(AppointmentSchedular));
