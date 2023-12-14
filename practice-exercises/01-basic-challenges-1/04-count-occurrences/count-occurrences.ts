export function countOccurrences(str: string, char: string): number {
  const lowerStr = str.toLowerCase();
  const lowerChar = char.toLowerCase();

  let count: number = 0;

  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === lowerChar) {
      count++;
    }
  }

  return count;
}
