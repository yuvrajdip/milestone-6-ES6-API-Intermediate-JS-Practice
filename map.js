

// map : it returns
const numbers = [4,5,2,10]

const result = numbers.map(function doubled(num){
  return num*3
})
// here doubled is a callback function
console.log(result);


const result2 = numbers.map( (number)=> number*2 ) // using anonymous arrow function
console.log(result2);



const friendsWithFirstName = ["Tom", "John", "Ben"]
const friendsWithFullName = friendsWithFirstName.map((name)=> name+" "+"Smith")
console.log(friendsWithFullName);