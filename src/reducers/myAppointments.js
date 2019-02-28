const myAppointmentsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MY_APPOINTMENT":
      return [...state, action.appointment];
    case "CANCEL_MY_APPOINTMENT": //CLIENT DOES THIS
      return state.map(appointment => {
        if (appointment.id === action.id) {
          appointment.status = "canceled";
        }
        return appointment;
      });
    case "REMOVE_MY_APPOINTMENT":
      return state.filter(appointment => {
        if (appointment.id === action.id) {
          return false;
        }
        return true;
      });
    default:
      return state;
  }
};

export default myAppointmentsReducer;
