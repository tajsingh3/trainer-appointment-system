import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SidebarHeader from "../components/SidebarHeader";
import AppointmentDashboardPage from "../components/pages/AppointmentDashboardPage";
import HomePage from "../components/pages/HomePage";
import SchedualMakerPage from "../components/pages/SchedualMakerPage";
import AppointmentSlotsPage from "../components/pages/AppointmentSlotsPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <SidebarHeader />
      <Route path="/" component={HomePage} exact />
      <Route path="/myappointments" component={AppointmentDashboardPage} />
      <Route path="/createappointments" component={SchedualMakerPage} />
      <Route path="/availableappointments" component={AppointmentSlotsPage} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
