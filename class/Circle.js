const _radius = new WeakMap();
const _move =  new WeakMap();
class Circle {
  constructor(radius){
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log('move', this);
      
    });
  
  }
  get radius(){
    return _radius.get(this);
  }

  set radius(value){
    if(value <= 0) throw new Error("invalid radius");
    _radius.set(this, value);
  }
  
  draw(){
    console.log(_radius.get(this));
    console.log('draw');
  }
}

export default Circle;
