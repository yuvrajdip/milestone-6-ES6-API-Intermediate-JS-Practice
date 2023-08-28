

//* reduce
const numbers = [1,2,3,4 ]
const total = numbers.reduce( function myCallback(initial, current){
  return initial+current;
}, 0) // here 0 is initial value

console.log(total); // 10