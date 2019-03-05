import React from "react";
import Typography from "@material-ui/core/Typography";

import AppointmentTabs from "../AppointmentTabs";
import AppointmentDateRangePicker from "../AppointmentDateRangePicker";

const AvailableAppointmentsPage = props => {
  return (
    <div className="content-container">
      <div className="page-title">
        <Typography variant="h5" gutterBottom>
          Available Appointments
        </Typography>
      </div>
      <div className="date-range-picker">
        <AppointmentDateRangePicker />
      </div>
      <AppointmentTabs isAvailableAppointmentsPage />
    </div>
  );
};

export default AvailableAppointmentsPage;
