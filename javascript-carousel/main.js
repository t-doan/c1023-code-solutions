const $pokemonImg = document.querySelector('.pokemon-img');
const $circle = document.querySelectorAll('.fa-circle');
const $arrowRight = document.querySelector('.fa-chevron-right');
const $arrowLeft = document.querySelector('.fa-chevron-left');
const imgArray = [
  './images/001.png',
  './images/004.png',
  './images/007.png',
  './images/025.png',
  './images/039.png',
];
let counter = 0;
const length = imgArray.length;
$arrowRight.addEventListener('click', handlePageRight);
$arrowLeft.addEventListener('click', handlePageLeft);
let runInterval = setInterval(handlePageRight, 3 * 1000);

function stopInterval() {
  clearInterval(runInterval);
}

function resumeInterval() {
  runInterval = setInterval(handlePageRight, 3 * 1000);
}

function handlePageRight(event) {
  counter++;
  if (counter <= 4) {
    const previousCounter = counter - 1;
    const imageCurrent = imgArray[counter];
    $pokemonImg.setAttribute('src', imageCurrent);

    $circle[counter].className = 'fa-solid fa-circle';
    if (previousCounter > -1) {
      $circle[previousCounter].className = 'fa-regular fa-circle';
    }
    if (counter === 0) {
      $circle[imgArray.length - 1].className = 'fa-regular fa-circle';
    }
  } else {
    counter = -1;
  }
}

function handlePageLeft(event) {
  stopInterval();
  setTimeout(resumeInterval);
  counter--;
  if (counter >= 0) {
    const previousCounter = counter + 1;
    const imageCurrent = imgArray[counter];
    $pokemonImg.setAttribute('src', imageCurrent);
    $circle[counter].className = 'fa-solid fa-circle';
    if (previousCounter < 5) {
      $circle[previousCounter].className = 'fa-regular fa-circle';
    }

    if (counter === length - 1) {
      $circle[0].className = 'fa-regular fa-circle';
    }
  } else {
    counter = 5;
  }
}
