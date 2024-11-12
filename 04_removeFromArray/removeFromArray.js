//create a function
    //takes in an array, and other arguments 

// const removeFromArray = function(inputArr, removeOne, removeTwo=null, removeThree=null) {
//     //removes the non array arguments from that array, and return the array with the remaining elements
//     return inputArr.filter(e=>!Array.from(arguments).slice(1).includes(e))
// };
//My answer was kind of similar to the advanced solution, however different in that I defined multiple extra arguments and set their default value to null, which is another problem... If the inputArr array has any elements with a value of null they'll match that default value. So rest would have been better and without looking at the solution right now I'm going to attempt to use rest:
const removeFromArray = function(inputArr, ...otherArgs){
    return inputArr.filter(e=>!otherArgs.includes(e))
}
//This worked


// Do not edit below this line
module.exports = removeFromArray;
