function palindromes(str){
  let strArr = str.toLowerCase().split('')
  let approvedElements = 'abcdefghijklmnopqrstuvwxyz0123456789'
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
