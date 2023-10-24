const num1 = 5;
const num2 = 7;
const num3 = 2;
const maximumValue = Math.max(num1, num2, num3);
console.log('result of maximumValue:', maximumValue);

const heroes = ['Spider-man', 'Batman', 'Iron-man', 'Flash'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

const library = [
  { title: 'The C Programming Language', author: 'Brian Kemighan' },
  { title: 'Automate The Boring Stuff with Python', author: 'Al Sweigart' },
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett',
  },
];
const lastBook = library.pop();
console.log('value of lastBook:', lastBook);
const firstBook = library.shift();
console.log('value of firstBook:', firstBook);
const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = { title: 'CSS Secrets', author: 'Lea Verou' };
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library array after splice:', library);

const fullName = 'Tai Doan';
const firstAndLastName = fullName.split(' ');
console.log('result of firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('result of sayMyName:', sayMyName);
