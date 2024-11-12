const fibonacci = function(desiredElement) {
    let sequence = []
    for(let i = 0; i<desiredElement; i++){
        if(i===0){
          sequence.push(1)
        }else if(i===1){
          sequence.push(1)
        }else{
          sequence.push(sequence[i-2]+sequence[i-1])
        }
    }
    return sequence[desiredElement-1]
};
//A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
//return a specific member of the sequence; thus we'll need to build up to that member of the sequence

// Do not edit below this line
module.exports = fibonacci;
