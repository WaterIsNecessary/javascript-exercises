const sumAll = function(num1, num2) {

    let sum = null;

    if (num1 < num2 && num1 >= 0 && num2 >=0 && Number.isInteger(num1) && Number.isInteger(num2)) {

        for (i = num2; i >= num1; i--) {
            sum += i;
        }

    } else if (num1 > num2 && num1 >= 0 && num2 >=0 && Number.isInteger(num1) && Number.isInteger(num2)) {

        for (i = num1; i >= num2; i-- ) {
            sum += i;
        }

    } else {
        sum = "ERROR"
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
