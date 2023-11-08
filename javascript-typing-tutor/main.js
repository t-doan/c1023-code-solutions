const $phrase = document.querySelectorAll('span');
const $currentKey = document.querySelector('body');

let count = 0;
function key(event) {
  if ($phrase[count].textContent === event.key) {
    console.log('key same:', event.key);
    $phrase[count].className = 'current green';
    count++;
    $phrase[count].className = 'current black';
  } else {
    console.log('key wrong:', event.key);
    $phrase[count].className = 'current red';
  }
}

$currentKey.addEventListener('keydown', key);
