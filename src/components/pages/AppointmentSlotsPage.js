import React from "react";

import AppointmentTabs from "../AppointmentTabs";
import AppointmentDateRangePicker from "../AppointmentDateRangePicker";

const AppointmentSlotsPage = () => (
  <div>
    <p>Appointment Slots Page</p>
    <AppointmentDateRangePicker />
    <AppointmentTabs isAvailableAppointmentsPage/>
  </div>
);

export default AppointmentSlotsPage;
