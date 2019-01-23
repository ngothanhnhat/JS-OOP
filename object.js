//Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function(){
      console.log('draw');
    }
  }
}

// let circle = createCircle(1);

//Constructur Function
function Circle(radius){
  this.radius = radius;
  let defaultLocation = {x: 0, y: 0}
  this.draw = function(){
    console.log('draw');
  }

  //Define getter and setter
  Object.defineProperty(this, 'defaultLocation', {
    get: function(){
      return defaultLocation;
    },
    set: function(value){
      if(!value.x || !value.y)
        throw new Error('Invalid location');

      defaultLocation = value;
    }
  })

}
let circle = new Circle(1);

for(let key in circle){
    if(typeof circle[key] !== 'function')
      console.log(key, circle[key])
}
const keys = Object.keys(circle);
console.log(keys);

if('radius' in circle){
  console.log('Circle has a radius')
}