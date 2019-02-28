const selectAppointmentsByDay = (appointments, day) => {
  return appointments.filter(appointment => {
    return appointment.date.isoWeekday() === day ? true : false;
  });
};

const selecteAvailableAppointments = (
  appointments,
  { availableStartDate, availableEndDate }
) => {
  const visibleAppointments = appointments.filter(appointment => {
    const startDateMatch = availableStartDate
      ? availableStartDate.isSameOrBefore(appointment.date, "day")
      : true;
    const endDateMatch = availableEndDate
      ? availableEndDate.isSameOrAfter(appointment.date, "day")
      : true;

    return startDateMatch && endDateMatch;
  });

  return visibleAppointments;
};

export { selectAppointmentsByDay, selecteAvailableAppointments };
