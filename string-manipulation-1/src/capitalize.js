/* exported capitalize */
function capitalize(word) {
  const firstChar = word[0].toUpperCase();
  let newWord = firstChar;
  for (let i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}
