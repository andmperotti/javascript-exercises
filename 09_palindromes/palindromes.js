function palindromes(str){
  let strArr = str.split('')
  let approvedElements = 'abcdefghijklmnopqrstuvwxyz'
  let filteredArr = strArr
    .filter(letter=>approvedElements
    .includes(letter)
  )
  let filteredStr = filteredArr.join('')
  let reversedStr = filteredArr
    .reverse()
    .join('')
  return filteredStr === reversedStr
}

// Do not edit below this line
module.exports = palindromes;
