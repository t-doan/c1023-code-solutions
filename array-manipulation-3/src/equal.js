/* exported equal */
function equal(first, second) {
  let boolean;
  let firstInt;
  let secondInt;

  if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      firstInt = first[i];
      secondInt = second[i];
      if (firstInt === secondInt) {
        boolean = true;
      } else {
        boolean = false;
        break;
      }
    }
  } else {
    boolean = false;
  }
  return boolean;
}
