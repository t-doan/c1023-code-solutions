function ExampleConstructor() {}

console.log(
  'value of ExampleConstructor prototype:',
  ExampleConstructor.prototype
);
console.log(
  'typeof ExampleConstructor prototype:',
  ExampleConstructor.prototype
);
const newExampleConstruct = new ExampleConstructor();
console.log('value of newExampleConstruct:', newExampleConstruct);
const checkInstance = newExampleConstruct instanceof ExampleConstructor;
console.log('is instanceOf:', checkInstance);
