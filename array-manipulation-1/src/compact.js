/* exported compact */
function compact(array) {
  const compactArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}
