//create a function, that takes two integer arguments
const sumAll = function(startingInt, endingInt) {
    //return the sum of every integer between and including those integer arguments
    if((startingInt>=0 && typeof startingInt==='number' && Math.floor(startingInt)===startingInt)
        && (endingInt>=0 && typeof endingInt==='number' && Math.floor(endingInt)===endingInt)
    ){
        let lowerArg= null
        let higherArg = null
        if(startingInt<endingInt){
        lowerArg=startingInt
        higherArg=endingInt
        }else{
        lowerArg=endingInt
        higherArg=startingInt
        }
        return Array.from({length:higherArg-lowerArg+1}, (e,i)=>lowerArg+i).reduce((acc,ele)=>acc+ele,0)
    }else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
