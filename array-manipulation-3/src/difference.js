/* exported difference */
function difference(first, second) {
  const uniqueArray = [];
  let value;
  for (let i = 0; i < first.length; i++) {
    value = first[i];
    if (!second.includes(value)) {
      uniqueArray.push(first[i]);
    }
  }

  for (let i = 0; i < second.length; i++) {
    value = second[i];
    if (!first.includes(value)) {
      uniqueArray.push(second[i]);
    }
  }
  return uniqueArray;
}
