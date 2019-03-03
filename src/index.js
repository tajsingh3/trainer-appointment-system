import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { startSetMyAppointments } from "./actions/appointments";
// import './firebase/firebase';

// import {
//   addAppointment,
//   cancelAppointment,
//   removeAppointment
// } from "./actions/appointments";

// import moment from "moment";

const store = configureStore();
// let appt = { id: 0, date: moment(), status: "available" };
// store.dispatch(addAppointment(appt,'client'));

// store.dispatch(addAppointment({id:1,date:moment(),status:'available'},'trainer'));

// store.dispatch(cancelAppointment(0,'client'));

// store.dispatch(removeAppointment(1,'trainer'));
// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(startSetMyAppointments()).then(() => {
  ReactDOM.render(jsx, document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
