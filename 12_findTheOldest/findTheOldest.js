const findTheOldest = function(array) {

    const newArray = array.reduce((accumulator, currentVal, ind, arr) => {

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

    return newArray[0];

};

// Do not edit below this line
module.exports = findTheOldest;
