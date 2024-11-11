const repeatString = function(inputString, numRepeat) {
    if(numRepeat<0){return 'ERROR'}
    let resultString = ''
    for(let i = 1; i<=numRepeat; i++){
        resultString+=inputString
    }
    return resultString
};

// Do not edit below this line
module.exports = repeatString;
