class Elevator {
  constructor() {
    this.floor = 0;
    this.maxFloor = 10;
    this.direction = "up";
    this.requests = []; // a list of pending requests. Floors where the elevator must stop.
    this.waitingList = []; // people waiting for the elevator -they made the request and they're waiting the elevator to come
    this.passengers = []; // people currently in the elevator
  }

  update() {
    if (this.requests.length === 0 && this.waitingList.length === 0) {
      this.stop();
    } else if (this.requests.length > 0) {
      if (this.requests[0] < this.floor) {
        this.floorDown();
      } else if (this.requests[0] > this.floor) {
        this.floorUp();
      } else if (this.requests[0] === this.floor) {
        this._passengersLeave(this.passengers[0]);
      }
    } else if (this.waitingList.length > 0) {
      if (this.waitingList[0].originFloor > this.floor) {
        this.floorUp();
      } else if (this.waitingList[0].originFloor < this.floor) {
        this.floorDown();
      } else if (this.waitingList[0].originFloor === this.floor) {
        this._passengersEnter(this.waitingList[0]);
      }
    }
    this.log();
  }

  start() {
    this.startingElevetor = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.startingElevetor);
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }

  floorUp() {
    this.floor < this.maxFloor ? (this.floor += 1) : (this.direction = "Up");
  }

  floorDown() {
    this.floor > 0 ? (this.floor -= 1) : (this.direction = "Down");
  }

  call(person) {
    this.waitingList.push(person);
  }

  _passengersEnter(person) {
    if (this.waitingList.includes(person)) {
      this.waitingList.splice(this.waitingList.indexOf(person), 1);
      this.requests.push(person.destinationFloor);
      this.passengers.push(person);
      console.log(`${person.name} has entered the elevator`);
    }
  }

  _passengersLeave(person) {
    if (this.passengers.includes(person)) {
      this.passengers.splice(this.passengers.indexOf(person), 1);
      this.requests.splice(0, 1);
      console.log(`${person.name} has left the elevator`);
    }
  }
}

module.exports = Elevator;
