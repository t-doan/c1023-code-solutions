/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(area, perimeter, width) {
    super(area, perimeter);
    this.width = width;
  }

  describe() {
    return `${myShape.describe()} width: ${this.width}`;
  }
}

const mySquare = new Square(25, 20, 5);
console.log(mySquare.describe());
