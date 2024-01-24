const repeatString = function(str, num) {
    let inputStr = str;
    for (i = 1; i < num; i++) {
        str += inputStr;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
