import { takeAChance } from './take-a-chance.js';

const myPromise = takeAChance('Tai');

myPromise
  .then((value) => console.log(value))
  .catch((value) => console.log(value));
