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
import { history } from "./routers/AppRouter";
import { login, logout, startIsTrainer } from "./actions/auth";

import "./styles/styles.scss";


const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

const getAppointmentsData = async () => {
  await store.dispatch(startSetMyAppointments());
  return await store.dispatch(startSetAvailableAppointments());
};

let hasRendered = false;
const renderApp = () => {
  console.log(hasRendered);

  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<Spinner />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startIsTrainer());
    getAppointmentsData().then(() => {
      renderApp();

      if (history.location.pathname === "/") {
        history.push("/myappointments");
      }
    });
    console.log("logged in");
  } else {
    store.dispatch(logout());
    renderApp();
    console.log("logged out");
    history.push("/");
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
