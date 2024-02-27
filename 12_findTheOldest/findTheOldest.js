const findTheOldest = function(array) {

    // My initial way of doing it

    /* const newArray = array.reduce((accumulator, currentVal, ind, arr) => {

        if (!currentVal.yearOfDeath) {

            // Amend this later to use JS date function

            currentVal['age'] = (new Date().getFullYear()) - currentVal.yearOfBirth;

        }

        if (currentVal.yearOfDeath) {

            currentVal['age'] = currentVal.yearOfDeath - currentVal.yearOfBirth;

        }

        accumulator[ind] = currentVal;

        return accumulator;

    },[]);

    newArray.sort((a,b) => {

        return (a.age > b.age) ? -1 : (a.age === b.age) ? 0 : 1;

    });

    return newArray[0]; */

    // The other way of doing it

    // write a function that calculates age and takes account of if the person
    // is still alive

    return array.reduce((oldest, currentPerson) => {
        
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return (oldestAge > currentAge) ? oldest : currentPerson; 

    });

};

const getAge = (birthYear, deathYear) => {

    if (!deathYear) return new Date().getFullYear() - birthYear;

    return deathYear - birthYear;        

};

// Do not edit below this line
module.exports = findTheOldest;
