/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(area, perimeter, radius) {
    super(area, perimeter);
    this.radius = radius;
  }

  describe() {
    return `${myShape.describe()} radius: ${this.radius}`;
  }
}

const myCircle = new Circle(25, 20, 15);
console.log(myCircle.describe());
