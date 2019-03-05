import database from "../firebase/firebase";
import moment from "moment";

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

// export const startSelectAppointment = appointment => {
//   return dispatch => {
//     database
//       .ref(`myAppointments/${appointment.id}`)
//       .set({
//         date: appointment.date.format("dddd, MMMM Do YYYY h:mm a"),
//         status: "selected"
//       })
//       .then(() => {
//         const { id, date } = appointment;
//         dispatch(addAppointment({ id, date, status: "selected" }, "my"));
//       });

//     database
//       .ref(`availableAppointments/${appointment.id}/status`)
//       .set("selected")
//       .then(() => {
//         const { id, date } = appointment;
//         dispatch(selectAppointment({ id, date, status: "selected" }));
//       });
//   };
// };

export const startSelectAppointment = appointment => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    database
      .ref(`users/${uid}/myAppointments/${appointment.id}`)
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

export const startCancelAppointment = appointment => {
  return dispatch => {
    database
      .ref(`myAppointments/${appointment.id}`)
      .update({
        status: "canceled"
      })
      .then(() => {
        const { id } = appointment;
        dispatch(cancelAppointment(id, "my"));
      });

    database
      .ref(`availableAppointments/${appointment.id}/status`)
      .set("canceled")
      .then(() => {
        const { id } = appointment;
        dispatch(cancelAppointment(id, "available"));
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

export const setMyAppointments = appointments => {
  return {
    type: "SET_MY_APPOINTMENTS",
    appointments
  };
};

// export const startSetMyAppointments = () => {
//   return dispatch => {
//     return database
//       .ref("myAppointments")
//       .once("value")
//       .then(snapshot => {
//         let appointments = [];

//         snapshot.forEach(childSnapshot => {
//           const { date, status } = childSnapshot.val();
//           const dateMoment = moment(date, "dddd, MMMM Do YYYY h:mm a");

//           appointments.push({
//             id: childSnapshot.key,
//             date: dateMoment,
//             status
//           });
//         });

//         dispatch(setMyAppointments(appointments));
//       });
//   };
// };

export const startSetMyAppointments = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`users/${uid}/myAppointments`)
      .once("value")
      .then(snapshot => {
        let appointments = [];

        snapshot.forEach(childSnapshot => {
          const { date, status } = childSnapshot.val();
          const dateMoment = moment(date, "dddd, MMMM Do YYYY h:mm a");

          appointments.push({
            id: childSnapshot.key,
            date: dateMoment,
            status
          });
        });

        dispatch(setMyAppointments(appointments));
      });
  };
};

export const setAvailableAppointments = appointments => {
  return {
    type: "SET_AVAILABLE_APPOINTMENTS",
    appointments
  };
};

export const startSetAvailableAppointments = () => {
  return dispatch => {
    return database
      .ref("availableAppointments")
      .once("value")
      .then(snapshot => {
        let appointments = [];

        snapshot.forEach(childSnapshot => {
          const { date, status } = childSnapshot.val();
          const dateMoment = moment(date, "dddd, MMMM Do YYYY h:mm a");

          appointments.push({
            id: childSnapshot.key,
            date: dateMoment,
            status
          });
        });

        dispatch(setAvailableAppointments(appointments));
      });
  };
};

export const removeAppointment = (id, appointmentType) => {
  appointmentType = appointmentType.toUpperCase();
  return {
    type: `REMOVE_${appointmentType}_APPOINTMENT`,
    id
  };
};
