export function reverseString(str: string): string {
  let newString: string = '';
  for (let i = 0; i <= str.length - 1; i++) {
    newString += str[str.length - 1 - i];
  }
  return newString;
}
