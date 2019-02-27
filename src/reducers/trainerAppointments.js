const trainerAppointmentsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TRAINER_APPOINTMENT":
      return [...state, action.appointment];
    case "CANCEL_TRAINER_APPOINTMENT": //CLIENT DOES THIS
      return state.map(appointment => {
        if (appointment.id === action.id) {
          appointment.status = "canceled";
        }
        return appointment;
      });
    case "REMOVE_TRAINER_APPOINTMENT":
      return state.filter((appointment) => {
        if(appointment.id === action.id){
          return false;
        }
        return true;
      });
    default:
      return state;
  }
};

export default trainerAppointmentsReducer;

//sample appointment object
//{
//id:
//date:moment,
//status: cancelled/available/booked
//}
