/* exported truncate */
function truncate(length, string) {
  let shortString = '';
  for (let i = 0; i < string.length; i++) {
    if (i < length) {
      shortString += string[i];
    }
  }
  return shortString + '...';
}
