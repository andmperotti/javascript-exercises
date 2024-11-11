//create a function
    //takes in an array, and other arguments 

const removeFromArray = function(inputArr, removeOne, removeTwo=null, removeThree=null) {
    //removes the non array arguments from that array, and return the array with the remaining elements
    return inputArr.filter(e=>e!==removeOne)
};



// Do not edit below this line
module.exports = removeFromArray;
