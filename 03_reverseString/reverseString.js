const reverseString = function (userString) {
    //add parameter to function
    //break down user input string into array of words
    let userWordsArray = userString.split(' ')
    //loop over the words from that array, and break each word into an array of letters
    for(let i = 0; i<userWordsArray.length; i++){
      let currentWord = userWordsArray[i]
      let wordArray = currentWord.split('')
      //reverse the order of letters of each word
      wordArray.reverse()
      //join them back into a string, and replace the word in the user word array
      currentWord = wordArray.join('')
      userWordsArray[i]=currentWord
    }
    //reverse the order of words in the array
    userWordsArray.reverse()
    //join the array back into a string
    //return the string back to the user
    return userWordsArray.join(' ')
  };

  //This is way too much code, I could have just split the string and reversed it, but instead I made it about individual words ... oops.

// Do not edit below this line
module.exports = reverseString;
