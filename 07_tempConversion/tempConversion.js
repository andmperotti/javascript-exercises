const convertToCelsius = function(fahreheitDegree) {
  //to get celsius given fahrenheit: (fahrenheit-32) * (5/9)
  return ((celsiusDegree-32)*(5/9)).toFixed(1)
};

const convertToFahrenheit = function(celsiusDegree) {
  //to get fahrenheit give celsius(celsius * (9/5)) +32
  return (fahreheitDegree*(9/5)+32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
