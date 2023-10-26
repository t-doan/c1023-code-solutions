/* exported includesSeven */
function includesSeven(array) {
  let has7 = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      has7 = true;
      break;
    }
  }
  return has7;
}
