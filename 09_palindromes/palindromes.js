//create a function that takes a string as an argument
  //returns true if that string is the same as that string in reverse, without factoring word breaks and punctuation 
//so we'll have to remove the word breaks and punctuation from the argument and then compare it to a reversed version, and we might as well convert its elements to lowercase.
const palindromes = function (inputString) {
    let reducedInput = Array.from(inputString.toLowerCase())
      .filter(e=>{
        if(e.charCodeAt()>96&&e.charCodeAt()<123){
          return true
        }else if(e.charCodeAt()>47&&e.charCodeAt()<58){
          return true
        }else{
          return false        }
      }).join('')
    let reversedReducedInput = Array.from(reducedInput).reverse().join('')
    return reducedInput === reversedReducedInput
  };

// Do not edit below this line
module.exports = palindromes;
