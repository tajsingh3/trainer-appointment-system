import React from "react";

import AppointmentTabs from "../AppointmentTabs";
import AppointmentDateRangePicker from "../AppointmentDateRangePicker";

const AppointmentDashboardPage = () => (
  <div>
    <p>Appontment Dahboard Page</p>
    <AppointmentDateRangePicker isMyAppointmentsPage/>
    <AppointmentTabs />
  </div>
);

export default AppointmentDashboardPage;
