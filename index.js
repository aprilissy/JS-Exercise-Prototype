/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function () {
  this.stomach = [];
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
}

const personOne = new Person('William', 21);
const personTwo = new Person('Grady', 33);
const personThree = new Person('Cheree', 41);

personTwo.eat('🍍');
personTwo.eat('🐌');
personTwo.eat('🥪');

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

//MVP
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  return this.tank = this.tank + gallons;
}

//Stretch
// wow! much empty...

// //******************* Brit's Code *********************/
// function Car(model, mpg) {
//   this.model = model;
//   this.milesPerGallon = mpg;
//   this.tank = 0;
//   this.odometer = 0;
// }

// Car.prototype.fill = function (gallons) {
//   this.tank = this.tank + gallons;
// };

// //Stretch with Brit
// Car.prototype.drive = function (dist) {
//   const driveableMiles = this.tank * this.milesPerGallon;
//   if (dist <= driveableMiles) {
//     this.odometer = this.odometer + dist;
//     this.tank = this.tank - (dist / this.milesPerGallon);
//   } else {
//     this.odometer = this.odometer + driveableMiles;
//     this.tank = 0;
//     return `I ran out of fuel at ${this.odometer} miles.`;
//   }
// }




/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, faveToy) {
  Person.call(this, name, age)
  this.favoriteToy = faveToy;
}

Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
}

// //******************* Brit's Code *********************/
// function Baby(name, age, favoriteToy){
//   Person.call(this, name, age);
//   this.favoriteToy = favoriteToy;
// }

// Baby.prototype = Object.create(Person.prototype);
// Baby.prototype.play = function(){
//   return `Playing with ${this.favoriteToy}.`;
// }





/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

  1. Calling 'this' in the global scope results in the window object. This is generally done as a mistake. The result is quite literally JavaScript... all of it. It's called Window or Global Object Binding. If you don't give 'this' context it defaults to the window (or global object in node) (unless we are in strict mode - then it returns 'undefined')

  2. When you call a function using a preceding dot, the object to the left of that dot is 'this.' So in zombies.brains('Yummy'), zombies gets 'this.' It's called Implicit Binding, you are implying that 'this' is whatever is to the left of the dot. Only works in objects with methods. 'This' has no binding until the function is invoked. 

  3. When a constructor function is used with the 'new' keyword, whatever object that you created and returned gets 'this.' It's called New Binding, the new thing you created gets 'this.'
  --- Brit's Answer --- When a function is invoked as a constructor function using the new keyword, this points to the new object that's created.

  4. .call, .apply, and .bind methods straight up define what 'this' is. It's called Explicit Binding because you are clearly (explicitly) stating what gets 'this.'
      .call   - pass in arguments one by one
              - immediately invokes the funcion
      .apply  - pass in arguments as an array
              - immediately invokes the function 
      .bind   - pass in arguments one by one
              - does not immediately invoke the function
              - instead it returns a brand new function that can be invoked later

*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) {
    module.exports.Airplane = Airplane
  }
  if (Person) {
    module.exports.Person = Person
  }
  if (Car) {
    module.exports.Car = Car
  }
  if (Baby) {
    module.exports.Baby = Baby
  }
}