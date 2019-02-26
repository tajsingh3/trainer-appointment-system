import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class AppointmentSchedular extends Component {
  state = {
    date: moment(),
    focused: false,
    time:moment().format('H:mm'),
    selectedDate: moment()
  };

  onSubmit = e => {
    e.preventDefault();

    //do some validation on date and time before setting state
    let fullDate = `${this.state.date.format("YYYY-MM-DD")} ${this.state.time}:00:00`;
    let selectedDate = moment(fullDate);

    this.setState(() => ({ selectedDate }));


    console.log(selectedDate);
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
            //defaultValue="07:30"
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
          <button>create</button>
        </form>
      </div>
    );
  }
}

AppointmentSchedular.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppointmentSchedular);
