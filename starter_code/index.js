const Elevator = require('./elevator');
const Person = require('./person');

const elevator = new Elevator();


const isak = new Person('Isak', 4, 7);
const cyril = new Person('Cyril', 5, 3);
const pierre = new Person('Pierre', 2, 8);

// elevator.start();

// elevator.update();

// elevator.floorUp();

// console.log(elevator.floor);

elevator.start();
elevator.call(isak);
elevator.call(cyril);
elevator.call(pierre);
/*
console.log(elevator.waitingList);
console.log(elevator.floor);
console.log(elevator.requests);
*/
