const convertToCelsius = function(fahrenheitDegree) {
  //to get celsius given fahrenheit: (fahrenheit-32) * (5/9)
  if(fahrenheitDegree===32){
    return 0
  }else{
    return Number(((fahrenheitDegree-32)*(5/9)).toFixed(1))
  }
};

const convertToFahrenheit = function(celsiusDegree) {
  //to get fahrenheit give celsius(celsius * (9/5)) +32
  if(celsiusDegree*(9/5)+32===0){
    return 0
  }else{
    return Number((celsiusDegree*(9/5)+32).toFixed(1))
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
