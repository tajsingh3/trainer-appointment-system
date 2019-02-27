//import moment from "moment";

const selectAppointmentsByDay = (appointments, day) => {
  return appointments.filter(appointment => {
    return appointment.date.isoWeekday() === day ? true : false;
  });
};

export { selectAppointmentsByDay };
