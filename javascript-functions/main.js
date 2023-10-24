function convertMinutesToSeconds(minutes) {
  minutes *= 60;
  return minutes;
}
console.log(
  'result of convertMinutesToSeconds:',
  convertMinutesToSeconds(4),
  'seconds'
);

function greet(name) {
  const greeting = 'Hello ' + name;
  return greeting;
}
console.log('result of greet:', greet('Tai'));

function getArea(width, height) {
  const area = width * height;
  return area;
}
console.log('result of getArea:', getArea(8, 4));

const person = { firstName: 'Lelouche', lastName: 'Lamperouge' };
function getFirstName(person) {
  return person.firstName;
}
console.log('result of getFirstName:', getFirstName(person));

const nintendo = [
  'gamecube',
  'wii',
  'wii u',
  'nintendo 64',
  'switch',
  'gameboy',
];
function getLastElement(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log('result of getLastElement:', getLastElement(nintendo));
