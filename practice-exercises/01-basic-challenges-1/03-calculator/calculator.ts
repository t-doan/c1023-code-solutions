export function calculator(
  num1: number,
  num2: number,
  operator: string
): number {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      console.log('invalid');
  }
  return 0;
}
