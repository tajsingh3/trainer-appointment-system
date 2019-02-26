

const appointmentsReducer = (state = [], action) => {
  switch (action.type) {
      case 'CREATE_APPOINTMENT':
        return [...state, action.appointment];
    // case 'CANCEL_APPOINTMENT': //CLIENT DOES THIS
    //     return state.map((appointment) => {

    //     });
    default:
      return state;
  }
};

export default appointmentsReducer;


//sample appointment object
//{
    //date:moment,
    //status: cancelled/available/booked
//}
