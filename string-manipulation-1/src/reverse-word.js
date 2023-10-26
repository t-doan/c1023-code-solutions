/* exported reverseWord */
function reverseWord(word) {
  let reverse = '';
  for (let i = 1; i <= word.length; i++) {
    reverse += word[word.length - i];
  }
  return reverse;
}
