import React, { Component } from "react";

// import FullWidthTabs from "./components/FullWidthTabs";
// import TrainerSchecdualMaker from "./components/TrainerSchedualMaker";
// import AppointmentScheduar from './components/AppointmentSchedular';
// import AppointmentDateRangePicker from "./components/AppointmentDateRangePicker";
// import AppointmentDashboardPage from "./components/AppointmentDashboardPage";
// import AppointmentSlotsPage from "./components/pages/AppointmentSlotsPage";
// import SchedualMakerPage from "./components/pages/SchedualMakerPage";
// import Header from "./components/Header";
// import SidebarHeader from './components/SidebarHeader';
import AppRouter from './routers/AppRouter';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter/>
      </div>
    );
  }
}

export default App;
