
const data = [{id:1, name :'abul', address : 'kochu khet'}]
console.log(data[0].name);


const products = {
  count : 500,
  data : [
    {id : 1 , name : 'lenovo laptop', price : 65000},
    {id : 2 , name : 'Dell XPS 13', price : 165000}
  ]
}
console.log(products.data[1].price); // second product price



const user1 = {
  id: 5001,
  name : "Shariful Raj",
  address : {
    street : {
      firstLane: '54/1 uttor side',
      secondLane: 'poribag er goli',
      thirdLane: "no dorai"
    },
    city : 'Dhaka'
  }
}
console.log(user1.address.street.secondLane);



//* use of Optional Chaining
const user2 = {
  id: 5002,
  name : "pori bibir bazar",
  address : {
    city: 'Chittagong', 
    country : 'Bangladesh'
  }
}
console.log(user2.address.street?.secondLane);