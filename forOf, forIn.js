
const numbers = [1,6,4,8]

// for of loop
// for of can loop over array and string
for( const num of numbers){
  // console.log(num);
}

const str = "I am a Hard Working Person"
for(const char of str){
  // console.log(char);
}




// for in loop : it is used in Object
const student = {
  name : 'Deba Dip Bhowmik',
  age : 26
}

for(const key in student){
  console.log(`${key} : ${student[key]}`);
}