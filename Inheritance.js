
class Vehicle{
  constructor(name, price){
    this.name = name
    this.price = price 
  }

  move(){
    console.log(`gari cholena cholea cholena re gari cholena`);
  }
}

class Bus extends Vehicle{
  constructor(name , seat, ticketPrice ){
    super(name, price);
    this.seat = seat 
    this.ticketPrice = ticketPrice
  }
}

class Truck extends Vehicle{
  constructor(name , price , load ){
    super(name , price)
    this.load = load 
  }
}