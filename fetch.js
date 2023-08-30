
console.log('fetching');

//* json placeholder is a place where we can get free api
const url = 'https://jsonplaceholder.typicode.com/todos/1'

//* fetch syntax
fetch(url)
.then(response => response.json())
.then(data=>console.log(data))

