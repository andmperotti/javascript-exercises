function palindromes(str){
  let reversedStr = str === str.split('').reverse().join('')
  return str === reversedStr
}

// Do not edit below this line
module.exports = palindromes;
