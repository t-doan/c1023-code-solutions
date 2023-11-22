/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  describe() {
    return `${super.describe()} width: ${this.width}`;
  }
}

const mySquare = new Square(3);
console.log(mySquare.describe());
