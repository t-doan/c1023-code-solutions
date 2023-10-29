/* exported lastChars */
function lastChars(length, string) {
  let numChars = '';
  if (string.length > 0) {
    for (let i = string.length - length; i < string.length; i++) {
      if (string[i] !== undefined) {
        numChars += string[i];
      }
    }
  }
  return numChars;
}
