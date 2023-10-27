/* exported takeRight */
function takeRight(array, count) {
  const takeArray = [];
  if (count > array.length) {
    for (let i = 0; i < array.length; i++) {
      if (array.length > 0) {
        takeArray.push(array[i]);
      }
    }
    return takeArray;
  } else {
    for (let i = 0; i < count; i++) {
      if (array.length > 0) {
        takeArray.push(array[array.length - count + i]);
      }
    }
    return takeArray;
  }
}
