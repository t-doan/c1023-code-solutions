/* exported intersection */
function intersection(first, second) {
  const uniqueArray = [];
  let value;
  for (let i = 0; i < first.length; i++) {
    value = first[i];
    if (second.includes(value)) {
      uniqueArray.push(first[i]);
    }
  }
  return uniqueArray;
}
