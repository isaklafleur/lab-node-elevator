const Elevator = require('./elevator');
const Person = require('./person');

const elevator = new Elevator();


let isak = new Person('Isak', 4, 7);
let cyril = new Person('Cyril', 5, 3);
let pierre = new Person('Pierre', 2, 8);

// elevator.start();

// elevator.update();

// elevator.floorUp();

// console.log(elevator.floor);

elevator.call(isak);
console.log(elevator.waitingList);
console.log(elevator.floor);
console.log(elevator.requests);
