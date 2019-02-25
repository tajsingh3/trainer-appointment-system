import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

import "react-dates/initialize";
import {
  DateRangePicker,
  SingleDatePicker,
} from "react-dates";
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

function TimePickers(props) {
  const { classes } = props;

  return (
    //<form className={classes.container} noValidate>
    <div>
        <SingleDatePicker />
      <TextField
        id="time"
        label="Appointment Time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          step: 300 // 5 min
        }}
        onChange={e => {
          let val = e.target.value;
          let now = moment();
          let fullDate = `${now.format("YYYY-MM-DD")} ${val}:00:00`;

          let fullMoment = moment(fullDate);
          console.log(fullMoment.format("YYYY-MM-DD H:mm"));
        }}
      />
      <DateRangePicker
  
/>
    </div>

    //</form>
  );
}

TimePickers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimePickers);
