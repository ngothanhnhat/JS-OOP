let person = {name: 'Mosh'};
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
// console.log(descriptor);
/* 
  configurable: true
  enumerable: false
  value: ƒ toString()
  writable: true
*/

Object.defineProperty(person, 'name', {
  writable: false, // Prevent set person.name = "Doe" 
  enumerable: false, // Hide keys Object.keys(person) 
  configurable: false, //Prevent delete delete person.name
});
// console.log()

// CONSTRUCTOR PROPTOTYPES

function Circle(radius) {
  this.radius = radius;
/* 
// Waste memmory when create new instance  
  this.draw = function(){
    console.log('draw');
  }
*/
}
// Prototype memebers
Circle.prototype.draw = function(){
  console.log('draw');
}

//Override proptotype of Object
Circle.prototype.toString = function(){
  return "Circle with radius " + this.radius; 
}

const circle = new Circle(1);
circle.draw();
console.log(circle.toString());

console.log(Object.keys(circle)); //Return instance members

// Return all members (instance + prototype)
for(let key in circle){
  console.log(key);
}





