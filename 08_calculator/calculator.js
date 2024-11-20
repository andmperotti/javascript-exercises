function add(firstInteger, secondInteger){
  return firstInteger+secondInteger
}

function subtract(firstInteger, secondInteger){
  return firstInteger-secondInteger
}

function sum(arr){
  return arr.reduce((acc,cur)=>acc+cur,0)
}

function multiply(arr){
  return arr.reduce((acc,cur)=>acc*cur,1)
}

function power(value, exponent){
  return Math.pow(value, exponent)
}

function factorial(highestInt){
  return Array
    .from({length: highestInt}, (e,i)=>e=i+1)
    .reduce((acc,cur)=>acc*cur,1)
}



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
