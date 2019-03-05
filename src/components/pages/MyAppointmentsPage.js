import React from "react";
import Typography from "@material-ui/core/Typography";

import AppointmentTabs from "../AppointmentTabs";
import AppointmentDateRangePicker from "../AppointmentDateRangePicker";

const MyAppointmentsPage = () => (
  <div className="content-container">
    <div className="page-title">
      <Typography variant="h5" gutterBottom>
        My Appointments
      </Typography>
    </div>
    <div className="date-range-picker">
      <AppointmentDateRangePicker isMyAppointmentsPage />
    </div>
    <AppointmentTabs />
  </div>
);

export default MyAppointmentsPage;
