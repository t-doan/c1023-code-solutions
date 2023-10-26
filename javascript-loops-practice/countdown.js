/* exported countdown */
function countdown(number) {
  const array = [];
  for (let i = 0; i <= number; i++) {
    array.push(number - i);
  }
  return array;
}
