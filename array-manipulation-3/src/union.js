/* exported union */
function union(first, second) {
  const uniqueArray = [];
  let value;
  for (let i = 0; i < first.length; i++) {
    value = first[i];
    uniqueArray.push(first[i]);
  }

  for (let i = 0; i < second.length; i++) {
    value = second[i];
    if (!first.includes(value)) {
      uniqueArray.push(second[i]);
    }
  }
  return uniqueArray;
}
