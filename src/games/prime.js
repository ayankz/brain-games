import gameStart from '../index.js';
import { getRandomNumber } from './random.js';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  if (number === 2) {
    return 'yes';
  }
  const maxDivisor = Math.sqrt(number) + 1;
  for (let i = 2; i < maxDivisor; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getData = () => {
  const number = getRandomNumber(2, 3571);
  const question = `${number}`;
  const correct = (isPrime(number));
  const gameData = [correct, question];
  return gameData;
};

const gameQuestion = 'Answer "yes" if the number is prime, otherwise answer "no".';
const prime = () => {
  gameStart(gameQuestion, getData);
};
export default prime;
