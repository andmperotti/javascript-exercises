//create a function, that takes two integer arguments
const sumAll = function(startingInt, endingInt) {
    //return the sum of every integer between and including those integer arguments
    return Array.from({length: endingInt-startingInt+1}, (e,i)=>startingInt+i).reduce((acc,ele)=>acc+ele,0)
};

// Do not edit below this line
module.exports = sumAll;
