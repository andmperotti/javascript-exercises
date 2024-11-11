//by looking at the tests I can see what they want to be done, using the readme I was a little confused that they wanted a calculator that when one function had been run it wanted it to remember that functions return and use it with the next function ran until the sum function was invoked (relating it to a = on a normal physical calculator). 
//However by looking at and evaluating the spec file I can see that the add function is just given 2 integer arguments and returns their sum. 
const add = function(firstInt, secondInt) {
  return firstInt+secondInt
};
//The subtract function is given two integer arguments and returns the difference between them. The multiply function takes in an array of numbers and multiplies them together.
const subtract = function(firstInt, secondInt) {
  return firstInt-secondInt
};
//the sum function is given an array of integers and returns the sum of those integers
const sum = function(intArr) {
  return intArr.reduce((acc,ind)=>acc+ind,0)
};
//The multiply function takes in an array of numbers and multiplies them together.
const multiply = function(intArr) {
  return intArr.reduce((acc,ind)=>acc*ind)
};
//The power function takes in two arguments and returns the value of the first arg raised to the power of the second args value.
const power = function(baseInt, powerInt) {
	return Math.pow(baseInt,powerInt)
};
//the factorial function is like the multiply function but we're given one argument and thus have to build an array of values from 1 up to and including that argument value and then multiply them together.
const factorial = function(userInt) {
	return Array.from({length: userInt}, (e,i)=>e=i+1).reduce((acc,ind)=>acc*ind,1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
