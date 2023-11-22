const $countdown = document.querySelector('.countdown-display');
let counter = 3;
const interval = setInterval(intervalMessage, 1000);

function intervalMessage() {
  $countdown.innerHTML = counter;
  counter -= 1;
  if (counter < 0) {
    $countdown.innerHTML = `~Earth Beeeelooowww Us~`;
    clearInterval(interval);
  }
}
