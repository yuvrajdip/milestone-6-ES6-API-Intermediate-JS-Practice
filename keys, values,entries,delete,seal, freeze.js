
// keys , values , entries , delete , seal , freeze


const glass = { 
  name : 'glass', 
  color : 'golden', 
  price : 12 ,
  isCleaned: true 
}

// console.log(glass);


//* Object.keys( obj_name )
const keysOfGlass = Object.keys( glass )
// console.log(`Glass Object keys : ${ keysOfGlass }`);
// console.log(keysOfGlass); // [ 'name', 'color', 'price', 'isCleaned' ]




//* Object.values( obj_name )
const valuesOfGlass = Object.values( glass )
// console.log(valuesOfGlass); // [ 'glass', 'golden', 12, true ]




//* Object.entries() returns both keys and values sametime
const entriesOfGlass = Object.entries( glass )
// console.log(entriesOfGlass);



delete glass.isCleaned  // delete isCleaned property from glass object
// console.log(glass); // { name: 'glass', color: 'golden', price: 12 }
glass.isCleaned = true // again adding isCleaned property
// console.log(glass); // { name: 'glass', color: 'golden', price: 12, isCleaned: true }



//* advanced
const {isCleaned, ...shortGlass} = glass
// console.log(shortGlass); // { name: 'glass', color: 'golden', price: 12 }
// console.log(glass);



//* freeze : doesn't allow to add or remove or modify Object properties
// console.log(glass); // { name: 'glass', color: 'golden', price: 12, isCleaned: true }
// Object.freeze( glass)
// delete glass.isCleaned
// glass.newProperty = 'property'
// glass.isCleaned = false
// console.log(glass); // { name: 'glass', color: 'golden', price: 12, isCleaned: true }



// seal : allows to only modify Object properties rather than adding or removing 
console.log(glass); // { name: 'glass', color: 'golden', price: 12, isCleaned: true }
Object.seal(glass)
glass['isCleaned'] = 'modified'
console.log(glass); // { name: 'glass', color: 'golden', price: 12, isCleaned: 'modified' }