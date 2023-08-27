
// finding max element from an array using 
// spread operator with Math.max()
const max = Math.max(1,2,3,4,5)
console.log('Max:', max);


const arr=[3,5,6,7,8,10,91]
const arrMax = Math.max(...arr) // spread operator
console.log(`Array Max : ${arrMax}`);





// why use spread operator while copying array?
const arr1 = [29,98,985]
const arr2 = arr1 
arr2.push(12)
console.log();
// if non-primitive data is stored in another variable then
// same address reference is set to new non-primitive variable

// So use spread Operator while copying array
const arr3 = [2,3,4]
const arr4 = [...arr3]
arr4.pop()
console.log(arr3);
console.log(arr4);




const numbers2 = [...arr3, 9999]
console.log(numbers2);


let numbers3 = [3,4,5]
let allNumbers = [1,2,...numbers3, 6,7]