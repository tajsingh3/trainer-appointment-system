import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import availableAppointmentsReducer from "../reducers/availableAppointments";
import myAppointmentsReducer from "../reducers/myAppointments";
import filterReducer from "../reducers/filters";
import authReducer from '../reducers/auth';

const reducers = combineReducers({
  availableAppointments: availableAppointmentsReducer,
  myAppointments: myAppointmentsReducer,
  filters: filterReducer,
  auth:authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
  return store;
};

export default configureStore;
