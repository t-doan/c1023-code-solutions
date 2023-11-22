/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * (radius * radius), 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()} radius: ${this.radius}`;
  }
}

const myCircle = new Circle(3, 5, 5);
console.log(myCircle.describe());
