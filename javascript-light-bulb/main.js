const $bulb = document.querySelector('.bulb');
const $container = document.querySelector('.container');

function lightSwitch(event) {
  if ($bulb.className === 'bulb on') {
    $bulb.className = 'bulb off';
    $container.className = 'container dark';
  } else {
    $bulb.className = 'bulb on';
    $container.className = 'container light';
  }
}

$bulb.addEventListener('click', lightSwitch);
