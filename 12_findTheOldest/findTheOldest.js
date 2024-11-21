const findTheOldest = function(people) {
  let oldestPerson = null
  let oldestAge = null


  for(let i = 0; i<people.length; i++){
    let currentPerson = people[i]
    let currentPersonAge = people[i].yearOfDeath-people[i].yearOfBirth

    if(currentPersonAge>oldestAge){
      oldestPerson=currentPerson
      oldestAge=currentPersonAge

    }
  }
  return oldestPerson
};

  
  // Do not edit below this line
  module.exports = findTheOldest;