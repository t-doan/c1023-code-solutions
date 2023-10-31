/* exported equal */
function equal(first, second) {
  let boolean;

  if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      const firstInt = first[i];
      const secondInt = second[i];
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
