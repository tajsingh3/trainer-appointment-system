import database from "../firebase/firebase";

export const addAppointment = (appointment, appointmentType) => {
  appointmentType = appointmentType.toUpperCase();
  return {
    type: `ADD_${appointmentType}_APPOINTMENT`,
    appointment
  };
};

export const startAddAppointment = (appointment, appointmentType) => {
  return dispatch => {
    const { date, status } = appointment;
    database
      .ref("availableAppointments")
      .push({ date: date.format("dddd, MMMM Do YYYY h:mm a"), status })
      .then(ref => {
        dispatch(
          addAppointment({ id: ref.key, date, status }, appointmentType)
        );
      });
  };
};

export const selectAppointment = appointment => {
  return {
    type: "SELECT_AVAILABLE_APPOINTMENT",
    appointment
  };
};

export const startSelectAppointment = appointment => {
  return dispatch => {
    database
      .ref(`myAppointments/${appointment.id}`)
      .set({
        date: appointment.date.format("dddd, MMMM Do YYYY h:mm a"),
        status: "selected"
      })
      .then(() => {
        const { id, date } = appointment;
        dispatch(addAppointment({ id, date, status: "selected" }, "my"));
      });

    database
      .ref(`availableAppointments/${appointment.id}/status`)
      .set("selected")
      .then(() => {
        const { id, date } = appointment;
        dispatch(selectAppointment({ id, date, status: "selected" }));
      });
  };
};

//this can only be from client so muappointment
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
