/* exported filterOutStrings */
function filterOutStrings(values) {
  const noString = [];
  let value;
  for (let i = 0; i < values.length; i++) {
    value = values[i];
    if (typeof value !== 'string') {
      noString.push(value);
    }
  }
  return noString;
}
