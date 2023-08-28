
//* forEach doesn't return 
const numbers = [1,5,6,4,15]

numbers.forEach(element=>console.log(element))

console.log(`\n`);
numbers.forEach( number => {
  if( number%2===0 )console.log(number)
})

// forEach modifies the input array