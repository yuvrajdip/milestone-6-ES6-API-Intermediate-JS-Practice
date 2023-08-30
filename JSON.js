

// JSON , parse , stringify
const teacher = {
  name : "Tapan",
  subject : "Bangla"
}

// JSON.stringify stringifies an Object/data 
const jsonData = JSON.stringify(teacher)
console.log(jsonData);
// JSON.parse removes string notations from stringified data/obj
const jsonObj = JSON.parse( jsonData )
console.log(jsonObj);