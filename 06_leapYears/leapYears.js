const leapYears = function(userYear) {
    //leap years are divisible by 4, but not 100 unless are divisible by 400
    //thus
    // if the year is divisible by 4 
    //   and if divisible by 100 and also by divisible 400
    //     return true
    //   otherwise if divisible by 100 and not divisible by 400
    //     return false
    //   else (if only divisible by 4, and not by 100 or 400)
    //     return true
    // else if not divisible by 4
    //return false 
    if(userYear%4===0){
        if(userYear%100===0&&userYear%400===0){
            return true
        }else if(userYear%100===0){
            return false
        }else{
            return true
        }
    }else{return false}
};

// Do not edit below this line
module.exports = leapYears;
