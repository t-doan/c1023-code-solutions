/* exported dropRight */
function dropRight(array, count) {
  const dropArray = [];
  for (let i = 0; i < array.length - count; i++) {
    if (array.length > 0) {
      dropArray.push(array[i]);
    }
  }
  return dropArray;
}
