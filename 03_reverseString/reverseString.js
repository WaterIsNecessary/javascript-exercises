const reverseString = function(inputStr) {
    let outputStr = "";
    for (i = -1; i >= (inputStr.length * -1); i--) {
        outputStr += inputStr.at(i);
    }
    return outputStr;
};

// Do not edit below this line
module.exports = reverseString;
