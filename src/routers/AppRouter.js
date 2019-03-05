import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Header from "../components/Header";
import MyAppointmentsPage from "../components/pages/MyAppointmentsPage";
import HomePage from "../components/pages/HomePage";
import CreateAppointmentPage from "../components/pages/CreateAppointmentPage";
import AvailableAppointmentsPage from "../components/pages/AvailableAppointmentsPage";
import PrivateRoute from "./PrivateRoute";
import PrivateTrainerRoute from './PrivateTrainerRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
      <Route path="/" component={HomePage} exact />
      <PrivateRoute path="/myappointments" component={MyAppointmentsPage} />
      <PrivateTrainerRoute path="/createappointments" component={CreateAppointmentPage} />
      <PrivateRoute
        path="/availableappointments"
        component={AvailableAppointmentsPage}
      />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
