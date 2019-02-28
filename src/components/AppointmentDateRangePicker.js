import React, { Component } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";

import {
  setMyStartDate,
  setMyEndDate,
  setAvailableStartDate,
  setAvailableEndDate
} from "../actions/filters";

import "react-dates/lib/css/_datepicker.css";

class AppointmentDateRangePicker extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  };

  render() {
    return (
      <div>
        <p>Date Range Picker</p>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate });
            if (this.props.isMyAppointmentsPage) {
              this.props.dispatch(setMyStartDate(startDate));
              this.props.dispatch(setMyEndDate(endDate));
            } else {
              this.props.dispatch(setAvailableStartDate(startDate));
              this.props.dispatch(setAvailableEndDate(endDate));
            }
          }}
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          numberOfMonths={1}
        />
      </div>
    );
  }
}

export default connect()(AppointmentDateRangePicker);
