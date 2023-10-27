/* exported take */
function take(array, count) {
  const takeArray = [];
  for (let i = 0; i < count; i++) {
    if (array.length > 0) {
      takeArray.push(array[i]);
    }
  }
  return takeArray;
}
