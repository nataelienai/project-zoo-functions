const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce(({ child, adult, senior }, entrant) => {
    if (entrant.age < 18) {
      return { child: child + 1, adult, senior };
    }
    if (entrant.age < 50) {
      return { child, adult: adult + 1, senior };
    }
    return { child, adult, senior: senior + 1 };
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { prices } = data;
  const entrantCount = countEntrants(entrants);

  return (prices.child * entrantCount.child)
  + (prices.adult * entrantCount.adult)
  + (prices.senior * entrantCount.senior);
}

module.exports = { calculateEntry, countEntrants };
