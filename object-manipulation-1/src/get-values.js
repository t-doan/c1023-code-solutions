/* exported getValues */
function getValues(object) {
  const array = [];
  for (const x in object) {
    array.push(object[x]);
  }
  return array;
}
