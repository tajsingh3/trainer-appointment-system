import React from "react";
import { Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Header from "../components/Header";
import MyAppointmentsPage from "../components/pages/MyAppointmentsPage";
import HomePage from "../components/pages/HomePage";
import CreateAppointmentPage from "../components/pages/CreateAppointmentPage";
import AvailableAppointmentsPage from "../components/pages/AvailableAppointmentsPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Route path="/" component={HomePage} exact />
      <Route path="/myappointments" component={MyAppointmentsPage} />
      <Route path="/createappointments" component={CreateAppointmentPage} />
      <Route
        path="/availableappointments"
        component={AvailableAppointmentsPage}
      />
    </div>
  </Router>
);

export default AppRouter;
