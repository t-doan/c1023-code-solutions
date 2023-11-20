const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', log);

function log(event) {
  event.preventDefault();
  const values = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value,
  };

  console.log('form-values:', values);
  $contactForm.reset();
}
