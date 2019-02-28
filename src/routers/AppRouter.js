import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SidebarHeader from "../components/SidebarHeader";
import MyAppointmentsPage from "../components/pages/MyAppointmentsPage";
import HomePage from "../components/pages/HomePage";
import CreateAppointmentPage from "../components/pages/CreateAppointmentPage";
import AvailableAppointmentsPage from "../components/pages/AvailableAppointmentsPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <SidebarHeader />
      <Route path="/" component={HomePage} exact />
      <Route path="/myappointments" component={MyAppointmentsPage} />
      <Route path="/createappointments" component={CreateAppointmentPage} />
      <Route
        path="/availableappointments"
        component={AvailableAppointmentsPage}
      />
    </div>
  </BrowserRouter>
);

export default AppRouter;
