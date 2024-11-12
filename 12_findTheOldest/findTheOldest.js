const findTheOldest = function(people) {
    let currentOldest = null
    let currentOldestYears = null
    for(let i = 0; i<people.length; i++){
      let yearsLived = people[i].yearOfDeath-people[i].yearOfBirth
      if(yearsLived>currentOldestYears){
        currentOldest = people[i].name
        currentOldestYears = yearsLived
      }
    }
    return currentOldest
  };