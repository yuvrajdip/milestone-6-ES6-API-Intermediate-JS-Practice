
const actor = {
  name: 'Anonto',
  phone: '01958719870'
}

// object destructuring
const {name, phone} = actor // can b also written as 
// const {name , phone:mobile}=actor
console.log(name) // Anonto
console.log(phone); // 01958719870



// array destructuring
const numbers=[234,678]
const [firstNumber, secondNumber]=numbers;
console.log(firstNumber); // 234
console.log(secondNumber); // 678


// swap two variables using destructuring
let a=10;
let b=20;
[a,b]=[b,a];
console.log('after swapping :');
console.log(`value of variable a is ${a}`);
console.log(`value of variable b is ${b}`);



// Alias : changing name while destructuring
const myObject = {
  student : 'Mike',
  teacher : 'Susan'
}

const {student:pupil , teacher:prof}= myObject
console.log(pupil , prof);
console.log(student , teacher);



// skipping items in an array while destructuring
const fruits = ['apple','banana']
const [,lastFruit]=fruits
console.log(lastFruit);



// advanced useCase
function numbers(){
  return [1,2,3,4]
}

let [num1, num2]= numbers()
console.log(num1, num2);



