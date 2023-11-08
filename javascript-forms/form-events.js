function handleFocus(event) {
  console.log('focus event fired');
  console.log('target name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('target name:', event.target.name);
}

function handleInput(event) {
  console.log('target value:', event.target.value);
  console.log('target name:', event.target.name);
}

const $inputUser = document.querySelector('#user-name');
const $inputEmail = document.querySelector('#user-email');
const $textarea = document.querySelector('#user-message');

$inputUser.addEventListener('focus', handleFocus);
$inputUser.addEventListener('blur', handleBlur);
$inputUser.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);
