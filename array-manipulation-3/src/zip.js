/* exported zip */
function zip(first, second) {
  const tempArray = [];
  let tempIndex = [];
  let length;

  if (first.length > second.length) {
    length = second.length;
  } else {
    length = first.length;
  }

  for (let i = 0; i < length; i++) {
    tempIndex.push(first[i]);
    tempIndex.push(second[i]);
    tempArray.push(tempIndex);
    tempIndex = [];
  }
  return tempArray;
}
