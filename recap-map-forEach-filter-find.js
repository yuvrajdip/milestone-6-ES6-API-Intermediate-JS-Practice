

// recap
const products = [
  {id:1, name:'lenovo', price : 65000},
  {id:2, name:'Asus', price : 66000},
  {id:3, name:'Dell', price : 67000},
  {id:4, name:'hp', price : 68000}
]


// map
console.log(`map:`);
const productArray = products.map(
  function myCallback(product){
    return product.name
    // if( product.price>50000){
    //   return product
    // }
  }
)
console.log(productArray);


// forEach
console.log(`forEach :`);
products.forEach((product)=>{
  if( product.price>= 50000 ){
    console.log(product.name);
  }
})


// filter : returns the whole product in an array
console.log(`filter:`);
const expensive = products.filter(
  function myCallback(product){
    return product.price>5000;
  }
)
console.log(expensive);
