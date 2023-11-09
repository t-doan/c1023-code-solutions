const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', callBack);

function callBack(event) {
  console.log('target:', event.target);
  console.log('target tag name:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    const closestAncestor = event.target.closest('.task-list-item');
    console.log('closest:', closestAncestor);
    closestAncestor.remove();
  }
}
