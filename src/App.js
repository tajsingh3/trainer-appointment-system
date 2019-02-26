import React, { Component } from "react";

// import FullWidthTabs from "./components/FullWidthTabs";
// import TrainerSchecdualMaker from "./components/TrainerSchedualMaker";
import AppointmentScheduar from './components/AppointmentSchedular'

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* <FullWidthTabs /> */}
        {/* <TrainerSchecdualMaker /> */}
        <AppointmentScheduar />

      </div>
    );
  }
}

export default App;
