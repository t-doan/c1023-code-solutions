/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width);
    this.width = width;
  }

  describe() {
    return `${myShape.describe()} width: ${this.width}`;
  }
}

const mySquare = new Square(4);
console.log(mySquare.describe());
