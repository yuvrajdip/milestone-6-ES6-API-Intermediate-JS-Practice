
//* class
class Product{
  constructor(){

  }

  country = "Bangladesh"

  speak(talk){
    console.log(`talking about ${talk}`);
  }
}

// creating object of class
const obj = new Product()
console.log(obj.country);
obj.speak("bcs")




//* another class
class Teacher{
  constructor(name, subject){
    this.name = name
    this.subject = subject
  }

  lecture(){
    console.log(`${this.name} Sir is teaching ${this.subject}`);
  }
}

const tapan = new Teacher('Shajahan Tapan', 'Physics')
tapan.lecture()