class Shape {
  constructor(color){
    this.color = color;
  }

  move(){
    console.log('moving');
  }
}

class Circle extends Shape{
  constructor(color){
    super(color)
  }
  move(){
    //super.move();
    console.log('Circle move');
  }

  craw(){
    console.log('craw');
  }
}
const c = new Circle('red');
console.log(c);
