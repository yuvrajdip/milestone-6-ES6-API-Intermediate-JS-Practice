
console.log('fetching');

//* json placeholder is a place where we can get free api
const url = 'https://jsonplaceholder.typicode.com/todos/1'

//* fetch syntax
fetch(url)  // Get the data from the url
.then(response => response.json()) // converts the data to JSON Object
.then(data=>console.log(data)) // Displays the JSON Object




// fetching data from onclick function
const loadUsers = () =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then( data => console.log(data))
}