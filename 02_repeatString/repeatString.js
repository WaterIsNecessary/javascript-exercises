const repeatString = function(inputStr, num) {
  let outputStr = "";
  if (num < 0 ) {
    return outputStr = "ERROR";
  }
  for (i = 0; i < num; i++) {
    outputStr += inputStr;
  }
  return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
