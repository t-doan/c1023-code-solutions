import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const x: number = +process.argv[2];
const y: number = +process.argv[4];
let result: number;

if (process.argv[3] === 'plus') {
  result = add(x, y);
  console.log('result:', result);
} else if (process.argv[3] === 'minus') {
  result = subtract(x, y);
  console.log('result:', result);
} else if (process.argv[3] === 'times') {
  result = multiply(x, y);
  console.log('result:', result);
} else if (process.argv[3] === 'over') {
  result = divide(x, y);
  console.log('result:', result);
}
