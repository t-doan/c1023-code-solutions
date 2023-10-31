/* exported equal */
function equal(first, second) {
  let boolean = true;

  if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
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
