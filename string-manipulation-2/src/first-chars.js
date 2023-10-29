/* exported firstChars */
function firstChars(length, string) {
  let numChars = '';
  if (string.length > 0) {
    for (let i = 0; i < length; i++) {
      if (string[i] !== undefined) {
        numChars += string[i];
      }
    }
  }
  return numChars;
}
