console.log('hello, world');

console.log('h1 selector:', document.querySelector('h1'));
console.dir(document.querySelector('h1'));
console.log('id explanation selector:', document.querySelector('#explanation'));
console.log(document.querySelector('#explanation'));
console.log('class attribute selector:', document.querySelector('.hint'));
console.dir(document.querySelector('.hint'));
console.log('p nodelist:', document.querySelectorAll('p'));
console.log(
  '.example-link nodelist:',
  document.querySelectorAll('.example-link')
);
