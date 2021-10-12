const { species, hours: zooOpeningHours } = require('../data/zoo_data');

function getExhibitions(weekday) {
  return species.reduce((exhibitions, { name, availability }) => {
    if (availability.includes(weekday)) {
      return [...exhibitions, name];
    }
    return [...exhibitions];
  }, []);
}

function getDaySchedule(weekday, { open, close }) {
  if (open === 0 && close === 0) {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: getExhibitions(weekday),
  };
}

function getSpeciesAvailability(speciesName) {
  const { availability } = species.find(({ name }) => name === speciesName);
  return availability;
}

function getWeekSchedule(weekdays) {
  return weekdays.reduce((accumulator, weekday) => {
    const schedule = accumulator;

    schedule[weekday] = getDaySchedule(weekday, zooOpeningHours[weekday]);
    return schedule;
  }, {});
}

function getSchedule(scheduleTarget) {
  const weekdays = Object.keys(zooOpeningHours);
  const speciesNames = species.map(({ name }) => name);

  if (weekdays.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: getDaySchedule(scheduleTarget, zooOpeningHours[scheduleTarget]),
    };
  }
  if (speciesNames.includes(scheduleTarget)) {
    return getSpeciesAvailability(scheduleTarget);
  }
  return getWeekSchedule(weekdays);
}

module.exports = getSchedule;
