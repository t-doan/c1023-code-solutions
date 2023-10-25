/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else {
    return 'Invalid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      console.log("We're the warner brother!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight everybody!');
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Die Hard');
      break;
    case 'comedy':
      console.log('The Big Lebowski');
      break;
    case 'horror':
      console.log('Scream');
      break;
    case 'drama':
      console.log('The Great Gatsby');
      break;
    case 'musical':
      console.log('High School Musical');
      break;
    case 'sci-fi':
      console.log('Interstellar');
      break;
    default:
      console.log(
        'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi'
      );
  }
}
