const Person = require('./person');

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.direction = 'up';
    this.requests = []; // a list of pending requests. Floors where the elevator must stop.
    this.waitingList = []; // people waiting for the elevator -they made the request and they're waiting the elevator to come
    this.passengers = []; // people currently in the elevator
  }
  start() {
    const startingElevetor = setInterval(() => this.update, 1000);
  }

  stop() {
    clearInterval(this.startingElevetor);
  }

  update() {
    this.log();
  }

  _passengersEnter() {
    this.requests.push(Person);
  }

  _passengersLeave() {
    if (this.floor === Person.destinationFloor) {
      this.passengers = this.passengers.filter(element => element.name !== Person.name);
    }
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.floor -= 1;
    }
  }

call(person) {
   this.waitingList.push(Person);
   if (this.floor < Person.originFloor) {
     while (this.floor !== this.requests.Person.originFloor) { this.floorUp(); }
   } else if (this.floor > this.waitingList.Person.originFloor) {
     while (this.floor !== this.requests.Person.originFloor) { this.floorDown(); }
   } else if (this.floor === this.waitingList.Person.originFloor){
     this.waitingList = this.waitingList.filter(el => el.name !== Person.name);
     this._passengersEnter();
   } else if (this.floor === this.requests.Person.destinationFloor){
     this._passengersLeave();
   }
 }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}


module.exports = Elevator;
