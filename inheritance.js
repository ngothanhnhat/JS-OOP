function extend(Child, Parent){
  // Inheritance
  Child.prototype = Object.create(Parent.prototype);

  //Reset constructor
  Child.prototype = Child;
}

function Shape(color){
  this.color = color;
}
Shape.prototype.duplicate = function(){
  console.log('duplicate');
}
function Circle(radius, color){
  //Call supper constructor
  Shape.call(this,color);

  this.radius = radius;
}
// Circle.prototype.constructor === Circle 
// new Circle.prototype.constructor() <=> new Circle()
// Circle inheritance of Shape
extend(Circle, Shape);
//Overriding
Circle.prototype.duplicate = function(){
  //Call from parent
  // Shape.prototype.duplicate.call(this);

  console.log('duplicate from circle');
}
Circle.prototype.draw = function(){
  console.log('draw');
}

const s = new Shape();
const c = new Circle(1, 'red')

function Square(size){
  this.size = size;
}
extend(Square, Shape);
Square.prototype.duplicate = function(){

  console.log('duplicate from square');
}

const shapes = [
  new Circle(),
  new Square()
]


///Polymorphism
for(let shape of shapes){
  console.log(shape.type);
  shape.duplicate();
}

//MIXINS
function mixin(target, ...sources){
  Object.assign(target, ...sources);
}
const canEat = {
  eat: function(){
    this.hunger--;
    console.log('eating');
  }
}
const canWalk = {
  walk: function(){
    console.log('walking');
  }
}
const canSwim = {
  swing: function(){
    console.log('swimming');
  }
}
function Person(){}
mixin(Person.prototype, canEat, canWalk)
const person = new Person();

function Goldfish(){}

mixin(Goldfish.prototype, canEat, canSwim)
const goldfish = new Goldfish();









