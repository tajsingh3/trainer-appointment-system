import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import {
  startSetMyAppointments,
  startSetAvailableAppointments
} from "./actions/appointments";
import Spinner from "./components/Spinner";
import { firebase } from "./firebase/firebase";

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

const renderApp = async () => {
  await store.dispatch(startSetMyAppointments());

  await store.dispatch(startSetAvailableAppointments());

  ReactDOM.render(jsx, document.getElementById("root"));
};

ReactDOM.render(<Spinner />, document.getElementById("root"));

renderApp();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("logged in");
  } else {
    console.log("logged out");
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
