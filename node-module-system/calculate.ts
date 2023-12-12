import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const x: number = +process.argv[2];
const operator: string = process.argv[3];
const y: number = +process.argv[4];
let result: number;

if (Number.isNaN(x)) {
  console.log(`${process.argv[2]} is not a number`);
  process.exit(1);
}
if (Number.isNaN(y)) {
  console.log(`${process.argv[4]} is not a number`);
  process.exit(1);
}

switch (operator) {
  case 'plus':
    result = add(x, y);
    break;
  case 'minus':
    result = subtract(x, y);
    break;
  case 'times':
    result = multiply(x, y);
    break;
  case 'over':
    result = divide(x, y);
    break;
  default:
    console.log('invalid operator');
    process.exit(1);
}

console.log('result:', result);
