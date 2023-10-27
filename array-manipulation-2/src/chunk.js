/* exported chunk */
function chunk(array, size) {
  let subArray = [];
  const mainArray = [];
  for (let i = 0; i < array.length; i++) {
    subArray.push(array[i]);
    if (subArray.length === size) {
      mainArray.push(subArray);
      subArray = [];
    } else if (i === array.length - 1) {
      mainArray.push(subArray);
    }
  }
  return mainArray;
}
