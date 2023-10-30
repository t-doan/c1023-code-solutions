/* exported capitalizeWords */
function capitalizeWords(string) {
  let wordsArray = string.split(' ');
  for (let i = 0; i < wordsArray.length; i++) {
    wordsArray[i] =
      wordsArray[i][0].toUpperCase() + wordsArray[i].substring(1).toLowerCase();
  }

  wordsArray = wordsArray.join(' ');
  return wordsArray;
}
