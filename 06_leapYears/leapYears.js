const leapYears = function(year) {

    /* if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    } */

    // Refactoring code for more efficiency

    return (year % 400 === 0 || (year % 4 === 0 && (year % 100 !== 0) ));

};

// Do not edit below this line
module.exports = leapYears;
