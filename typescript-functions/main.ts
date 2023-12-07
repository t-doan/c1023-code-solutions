function convertMinutesToSeconds(minutes: number): number {
  minutes *= 60;
  return minutes;
}
console.log(
  'result of convertMinutesToSeconds:',
  convertMinutesToSeconds(4),
  'seconds'
);

function greet(name: string): string {
  const greeting: string = 'Hello ' + name;
  return greeting;
}
console.log('result of greet:', greet('Tai'));

function getArea(width: number, height: number): number {
  const area: number = width * height;
  return area;
}
console.log('result of getArea:', getArea(8, 4));

interface Person {
  firstName: string;
  lastName?: string;
}
const person: Person = { firstName: 'Lelouch' };
function getFirstName(person: Person): string {
  return person.firstName;
}

console.log('result of getFirstName:', getFirstName(person));

const nintendo: string[] = [
  'gamecube',
  'wii',
  'wii u',
  'nintendo 64',
  'switch',
  'gameboy',
];
function getLastElement(array: string[]): string {
  const lastIndex: number = array.length - 1;
  return array[lastIndex];
}
console.log('result of getLastElement:', getLastElement(nintendo));
