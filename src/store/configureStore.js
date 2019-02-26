import { createStore } from 'redux';

import appointmentsReducer from '../reducers/appointments';

const configureStore = () => {
    const store = createStore(appointmentsReducer);
    return store;
};

export default configureStore;