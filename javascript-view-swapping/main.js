const $tabContainer = document.querySelector('.tab-container');
const $tabNode = document.querySelectorAll('.tab');
const $viewNode = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleTab);

function handleTab(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabNode.length; i++) {
      if ($tabNode[i] === event.target) {
        event.target.className = 'tab active';
      } else {
        $tabNode[i].className = 'tab';
      }
    }
  }

  if (event.target.matches('.tab')) {
    const $getData = event.target.getAttribute('data-view');
    for (let i = 0; i < $viewNode.length; i++) {
      if ($viewNode[i].getAttribute('data-view') === $getData) {
        $viewNode[i].className = 'view';
      } else {
        $viewNode[i].className = 'view hidden';
      }
    }
  }
}
