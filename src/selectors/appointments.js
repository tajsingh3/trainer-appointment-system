const selectAppointmentsByDay = (appointments, day) => {
  return appointments.filter(appointment => {
    return appointment.date.isoWeekday() === day ? true : false;
  });
};

const selectAppointments = (appointments, startDate, endDate) => {
  const visibleAppointments = appointments.filter(appointment => {
    const startDateMatch = startDate
      ? startDate.isSameOrBefore(appointment.date, "day")
      : true;
    const endDateMatch = endDate
      ? endDate.isSameOrAfter(appointment.date, "day")
      : true;

    return startDateMatch && endDateMatch;
  });

  return visibleAppointments;
};

export { selectAppointmentsByDay, selectAppointments };
