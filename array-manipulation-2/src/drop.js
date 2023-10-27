/* exported drop */
function drop(array, count) {
  const dropArray = [];
  for (let i = count; i < array.length; i++) {
    if (array.length > 0) {
      dropArray.push(array[i]);
    }
  }
  return dropArray;
}
