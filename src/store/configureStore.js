import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import trainerAppointmentsReducer from "../reducers/trainerAppointments";
import clientAppointmentsReducer from "../reducers/clientAppointments";
import filterReducer from "../reducers/filters";

const reducers = combineReducers({
  trainerAppointments: trainerAppointmentsReducer,
  clientAppointments: clientAppointmentsReducer,
  filters: filterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
  return store;
};

export default configureStore;
