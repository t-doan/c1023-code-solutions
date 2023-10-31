/* exported flatten */
function flatten(array) {
  const flat = [];
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      tempArray = array[i];
      for (let j = 0; j < tempArray.length; j++) {
        flat.push(tempArray[j]);
      }
    } else {
      flat.push(array[i]);
    }
  }

  return flat;
}
