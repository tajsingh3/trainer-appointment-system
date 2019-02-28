import React from "react";
// import { connect } from "react-redux";

import AppointmentTabs from "../AppointmentTabs";
import AppointmentDateRangePicker from "../AppointmentDateRangePicker";
// import { setIsAvailableAppointmentsPage } from '../../actions/filters';

const AppointmentSlotsPage = (props) => {

  //props.dispatch(setIsAvailableAppointmentsPage(true));
  
  return (
    <div>
      <p>Appointment Slots Page</p>
      <AppointmentDateRangePicker />
      <AppointmentTabs isAvailableAppointmentsPage />
    </div>
  );
};

export default AppointmentSlotsPage;
