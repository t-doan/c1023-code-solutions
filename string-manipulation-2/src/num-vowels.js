/* exported numVowels */
function numVowels(string) {
  let vowels = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === 'A') {
      vowels++;
    } else if (string[i].toUpperCase() === 'E') {
      vowels++;
    } else if (string[i].toUpperCase() === 'I') {
      vowels++;
    } else if (string[i].toUpperCase() === 'O') {
      vowels++;
    } else if (string[i].toUpperCase() === 'U') {
      vowels++;
    } else {
      vowels += 0;
    }
  }
  return vowels;
}
