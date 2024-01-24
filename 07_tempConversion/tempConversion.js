const convertToCelsius = function(far) {

  // Using Math.round as opposed to toFixed solves the issue of returning the
  // answer of 0.0 instead of just 0. It avoids needless 1 decimal place answers
  // in such cases. 

  let conversion = Math.round(((far - 32)*5/9) * 10) / 10;
  /* let answer = conversion.toFixed(1);
  return answer; */
  return conversion;

};

const convertToFahrenheit = function(cel) {

  let conversion = Math.round( ((cel * 1.8) + 32) * 10) / 10;
  /* let answer = conversion.toFixed(1);
  return answer; */
  return conversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
