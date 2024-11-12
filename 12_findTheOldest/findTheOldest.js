const findTheOldest = function(people) {
    let currentOldest = null;
    let currentOldestYears = null;
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear()
    for(let i = 0; i<people.length; i++){
      if(!people[i].yearOfDeath){
        people[i].yearOfDeath = currentYear
      }
      let yearsLived = people[i].yearOfDeath-people[i].yearOfBirth
      if(yearsLived>currentOldestYears){
        currentOldest = people[i]
        currentOldestYears = yearsLived
      }
    }
    return currentOldest
  };
  
  // Do not edit below this line
  module.exports = findTheOldest;