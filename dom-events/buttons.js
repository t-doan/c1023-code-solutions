const $button = document.querySelector('.click-button');
function handleClick(event) {
  console.log('Button clicked');
  console.log('Event:', event);
  console.log('Target property:', this);
}
$button.addEventListener('click', handleClick);

const $hover = document.querySelector('.hover-button');
function handleMouseover(event) {
  console.log('Button hovered');
  console.log('Event:', event);
  console.log('Target property:', this);
}
$hover.addEventListener('mouseover', handleMouseover);

const $2click = document.querySelector('.double-click-button');
function handleDoubleClick(event) {
  console.log('Button double-clicked');
  console.log('Event:', event);
  console.log('Target property:', this);
}
$2click.addEventListener('dblclick', handleDoubleClick);
