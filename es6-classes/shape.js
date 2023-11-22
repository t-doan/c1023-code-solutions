/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `area: ${this.area} perimeter: ${this.perimeter}`;
  }
}

const myShape = new Shape(25, 20);
console.log(myShape.describe());
