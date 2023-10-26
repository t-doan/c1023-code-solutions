/* exported tail */
function tail(array) {
  const tail = [];
  for (let i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
}
