const findTheOldest = function (arr) {
    const ages = arr.map((person) => {
        const currentYear = new Date().getFullYear();
        if (person.yearOfDeath) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return currentYear - person.yearOfBirth;
        }
    });
    let maxAgeIndex = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > ages[maxAgeIndex]) {
            maxAgeIndex = i;
        }
    }
    return arr[maxAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
