/* exported ransomCase */
function ransomCase(string) {
  let word = string[0].toLowerCase();
  for (let i = 1; i < string.length; i++) {
    if (i % 2 === 0) {
      word += string[i].toLowerCase();
    } else {
      word += string[i].toUpperCase();
    }
  }
  return word;
}
