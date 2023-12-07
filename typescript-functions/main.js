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
  var greeting = 'Hello ' + name;
  return greeting;
}
console.log('result of greet:', greet('Tai'));
function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('result of getArea:', getArea(8, 4));
var person = { firstName: 'Lelouch' };
function getFirstName(person) {
  return person.firstName;
}
console.log('result of getFirstName:', getFirstName(person));
var nintendo = ['gamecube', 'wii', 'wii u', 'nintendo 64', 'switch', 'gameboy'];
function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log('result of getLastElement:', getLastElement(nintendo));
