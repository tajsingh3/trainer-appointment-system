import React from "react";
import Typography from "@material-ui/core/Typography";

import AppointmentSchedularForm from "../AppointmentSchedularForm";

const CreateAppointmentPage = () => (
  <div className="content-container">
    <div className="page-title">
      <Typography variant="h5" gutterBottom>
        Create Appointment
      </Typography>
    </div>
    <AppointmentSchedularForm />
  </div>
);

export default CreateAppointmentPage;
