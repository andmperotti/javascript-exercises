function palindromes(str){
  let strArr = str.split('')
  let reversedStr = strArr.reverse().join('')
  return str === reversedStr
}

// Do not edit below this line
module.exports = palindromes;
