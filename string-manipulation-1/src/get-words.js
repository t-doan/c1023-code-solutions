/* exported getWords */
function getWords(string) {
  let array = [];
  if (string === '') {
    array = string.split('');
  } else {
    array = string.split(' ');
  }
  return array;
}
