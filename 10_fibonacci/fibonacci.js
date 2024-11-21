function fibonacci(target){
  target = parseInt(target)
  if(target===0){return 0}
  if(target<0){return 'OOPS'}

  let sequence = [1,1]
  for(let i = 2; i<=target; i++){
    sequence.push(sequence[i-2]+sequence[i-1])
  }
  return sequence[target-1]
}
// Do not edit below this line
module.exports = fibonacci;
