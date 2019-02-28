// export const addAppointment = (appointment, person) => {
//   person = person.toUpperCase();
//   return {
//     type: `ADD_${person}_APPOINTMENT`,
//     appointment
//   };
// };

// export const cancelAppointment = (id, person) => {
//   person = person.toUpperCase();
//   return {
//     type: `CANCEL_${person}_APPOINTMENT`,
//     id
//   };
// };

// export const removeAppointment = (id, person) => {
//   person = person.toUpperCase();
//   return {
//     type: `REMOVE_${person}_APPOINTMENT`,
//     id
//   };
// };

export const addAppointment = (appointment, appointmentType) => {
  appointmentType = appointmentType.toUpperCase();
  return {
    type: `ADD_${appointmentType}_APPOINTMENT`,
    appointment
  };
};

export const cancelAppointment = (id, appointmentType) => {
  appointmentType = appointmentType.toUpperCase();
  return {
    type: `CANCEL_${appointmentType}_APPOINTMENT`,
    id
  };
};

export const removeAppointment = (id, appointmentType) => {
  appointmentType = appointmentType.toUpperCase();
  return {
    type: `REMOVE_${appointmentType}_APPOINTMENT`,
    id
  };
};