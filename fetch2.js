
console.log("fetch2 ");

function loadUsers2(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data => displayUser(data))
}


function displayUser(items){
  
  const ul = document.getElementById('users-list')
  for(const item of items){
    console.log(item.name);
    const li = document.createElement('li')
    li.innerText = item.name
    ul.appendChild(li)
  }
}