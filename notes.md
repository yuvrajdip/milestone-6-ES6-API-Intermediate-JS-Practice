can I use map on Object in Javascript?

Yes, you can use the map method on an object in JavaScript. The map method creates a new array by applying a function to each element of an array. In the case of an object, the map method will apply the function to each property of the object.

Here is an example of how to use the map method on an object:

```
  const person = {
  name: "John",
  age: 30,
  city: "New York"
};
​
const newPerson = Object.keys(person).map(key => {
  return {
    [key]: person[key]
  };
});
​
console.log(newPerson); // [{name: "John"}, {age: 30}, {city: "New York"}]
```

​


In this example, we create a new object called `newPerson` by applying the map method to the `person` object. The map method applies the function to each property of the `person` object, and the function returns a new object with the property name and value. The `newPerson` object is then logged to the console.

It's important to note that the map method will not modify the original object. In this example, the `person` object will remain unchanged after the map method is applied.