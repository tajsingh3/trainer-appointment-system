const availableAppointmentsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_AVAILABLE_APPOINTMENT":
      return [...state, action.appointment];
    case "CANCEL_AVAILABLE_APPOINTMENT": //CLIENT DOES THIS
      return state.map(appointment => {
        if (appointment.id === action.id) {
          appointment.status = "canceled";
        }
        return appointment;
      });
    case "REMOVE_AVAILABLE_APPOINTMENT":
      return state.filter(appointment => {
        if (appointment.id === action.id) {
          return false;
        }
        return true;
      });
    case "SELECT_AVAILABLE_APPOINTMENT":
      return state.map(appointment => {
        if (appointment.id === action.appointment.id) {
          return action.appointment;
        }
        return appointment;
      });
    default:
      return state;
  }
};

export default availableAppointmentsReducer;

//sample appointment object
//{
//id:
//date:moment,
//status: cancelled/available/booked
//}
