

//* this keyword 
class Person{
  constructor(name , age){
    this.name = name 
    this.age  = age 
  }

  sleep(){
    console.log(`${this.name} is sleeping now`);
  }

  activity(){
    this.sleep()
  }
}

const kodom = new Person('kodom ali', 21)
console.log(kodom);
console.log(typeof kodom);

//todo: 'this' keyword bolte Class er khetre bujhai oi class er method ba properties ke

kodom.sleep()
kodom.activity()

//* search about this keyword in Javascript on ChatGPT