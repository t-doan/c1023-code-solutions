const $modal = document.querySelector('#modal');
const $light = document.querySelector('.bright');
const $no = document.querySelector('.survey');

function open(event) {
  if ($no.className === 'survey none') {
    $no.className = 'survey block';
    $light.className = 'dim';
  } else {
    $no.className = 'survey none';
    $light.className = 'bright';
  }
}

$modal.addEventListener('click', open);
$no.addEventListener('click', open);
