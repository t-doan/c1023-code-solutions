import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers [4, 10, 0]', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('returns the even numbers [2, 1492]', () => {
    const numbers = [2, 233, 1492, 223, 9];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, 1492]);
  });
  it('returns the even numbers [2, 4, 6, 10, 0]', () => {
    const numbers = [2, 4, 6, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, 4, 6, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns formatted amount $5.00', () => {
    const amount = 5;
    const result = toDollars(amount);
    expect(result).toBe('$5.00');
  });
  it('returns formatted amount $3242.00', () => {
    const amount = 3242;
    const result = toDollars(amount);
    expect(result).toBe('$3242.00');
  });
  it('returns formatted amount $0.00', () => {
    const amount = 0;
    const result = toDollars(amount);
    expect(result).toBe('$0.00');
  });
});

describe('divideBy', () => {
  it('returns the quotient [5,10,15,20,25]', () => {
    const numbers = [10, 20, 30, 40, 50];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([5, 10, 15, 20, 25]);
  });
  it('returns the quotient [(8, 5, 6, 9, 18)]', () => {
    const numbers = [40, 25, 30, 45, 90];
    const divisor = 5;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([8, 5, 6, 9, 18]);
  });
  it('returns the quotient [7, 14, 150, 225, 75]', () => {
    const numbers = [14, 28, 300, 450, 150];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([7, 14, 150, 225, 75]);
  });
});

describe('multiplyBy', () => {
  it('returns value of key', () => {
    const cats = {
      age: 2,
      feet: 4,
      level: 3,
    };
    const multiplier = 2;
    const result = multiplyBy(cats, multiplier);
    expect(result).toEqual({
      age: 5,
      feet: 9,
      level: 7,
    });
  });

  it('returns value of key', () => {
    const squid = {
      legs: 'none',
      tasty: 'yes',
      price: 3,
    };
    const multiplier = 2;
    const result = multiplyBy(squid, multiplier);
    expect(result).toEqual({
      price: 7,
    });
  });
});
