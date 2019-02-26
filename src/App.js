import React, { Component } from "react";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import "./App.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

class App extends Component {
  render() {
    return (
      <div>
        {jsx}
      </div>
    );
  }
}

export default App;
