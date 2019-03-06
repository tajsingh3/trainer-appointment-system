import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

import AppointmentTabs from "../AppointmentTabs";
import AppointmentDateRangePicker from "../AppointmentDateRangePicker";

const MyAppointmentsPage = props => {
  const { isTrainer } = props;
  return (
    <div className="content-container">
      <div className="page-title">
        <Typography variant="h5" gutterBottom>
          My Appointments
        </Typography>
      </div>
      <div className="date-range-picker">
        <AppointmentDateRangePicker isMyAppointmentsPage />
      </div>
      <AppointmentTabs isTrainer={isTrainer} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: !!state.auth.uid,
  isTrainer: state.auth.isTrainer
});

export default connect(mapStateToProps)(MyAppointmentsPage);
