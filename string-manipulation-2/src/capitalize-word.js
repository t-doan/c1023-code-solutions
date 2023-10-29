/* exported capitalizeWord */
function capitalizeWord(word) {
  const firstChar = word[0].toUpperCase();
  let newWord = firstChar;
  for (let i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  if (newWord === 'Javascript') {
    newWord = 'JavaScript';
  }
  return newWord;
}
