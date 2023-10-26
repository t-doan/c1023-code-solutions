/* exported reverse */
function reverse(array) {
  const reverseArray = [];
  for (let i = 1; i <= array.length; i++) {
    reverseArray.push(array[array.length - i]);
  }
  return reverseArray;
}
