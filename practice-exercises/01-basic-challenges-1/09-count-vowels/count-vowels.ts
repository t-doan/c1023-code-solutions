export function countVowels(str: string): number {
  let vowels = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === 'A') {
      vowels++;
    } else if (str[i].toUpperCase() === 'E') {
      vowels++;
    } else if (str[i].toUpperCase() === 'I') {
      vowels++;
    } else if (str[i].toUpperCase() === 'O') {
      vowels++;
    } else if (str[i].toUpperCase() === 'U') {
      vowels++;
    } else {
      vowels += 0;
    }
  }
  return vowels;
}
