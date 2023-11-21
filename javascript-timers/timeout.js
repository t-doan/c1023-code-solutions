function greetTimer(event) {
  const $h1 = document.querySelector('.message');
  $h1.innerText = 'Hello There';
}

setTimeout(greetTimer, 2 * 1000);
