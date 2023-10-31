/* exported unique */
function unique(array) {
  const uniqueArray = [];
  let value;
  for (let i = 0; i < array.length; i++) {
    value = array[i];
    if (array.indexOf(value) === i) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
