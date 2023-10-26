/* exported getKeys */
function getKeys(object) {
  const array = [];
  for (const x in object) {
    array.push(x);
  }
  return array;
}
