const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function() {
    let today = new Date();
    let currentYear = today.getFullYear();

    const oldest = people.sort(function(a, b) {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = currentYear;
        } else if (b.yearOfDeath === undefined) {
            b.yearOfDeath = currentYear;
        }
        const prev = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
        return prev > next  ? -1 : 1;
    });

    return oldest[0];
}

// Do not edit below this line
module.exports = findTheOldest;
