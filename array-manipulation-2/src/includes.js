/* exported includes */
function includes(array, value) {
  let boolean = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      boolean = true;
      break;
    }
  }
  return boolean;
}
