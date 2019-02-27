import { createStore, combineReducers } from "redux";

import trainerAppointmentsReducer from "../reducers/trainerAppointments";
import clientAppointmentsReducer from '../reducers/clientAppointments';
import filterReducer from '../reducers/filters';

const reducers = combineReducers({
  trainerAppointments: trainerAppointmentsReducer,
  clientAppointments:clientAppointmentsReducer,
  filters: filterReducer,
});

const configureStore = () => {
  const store = createStore(reducers);
  return store;
};

export default configureStore;
