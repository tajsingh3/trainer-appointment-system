import React, { Component } from "react";

// import FullWidthTabs from "./components/FullWidthTabs";
// import TrainerSchecdualMaker from "./components/TrainerSchedualMaker";
// import AppointmentScheduar from './components/AppointmentSchedular';
// import AppointmentDateRangePicker from "./components/AppointmentDateRangePicker";
import AppointmentDashboardPage from "./components/AppointmentsDashboardPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* <FullWidthTabs /> */}
        {/* <TrainerSchecdualMaker /> */}
        {/* <AppointmentScheduar /> */}
        {/* <AppointmentDateRangePicker /> */}
        <AppointmentDashboardPage />
      </div>
    );
  }
}

export default App;
