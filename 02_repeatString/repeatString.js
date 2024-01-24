const repeatString = function(str, num) {
    let inputStr = str;

    if (num >=1) {
        for (i = 1; i < num; i++) {
            str += inputStr;
        }
    } else if (num === 0) {
        str = "";
    } else {
        str = "ERROR";
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
