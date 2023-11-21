/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.radius = radius;
  }

  describe() {
    return `${myShape.describe()} radius: ${this.radius}`;
  }
}

const myCircle = new Circle(15);
console.log(myCircle.describe());
