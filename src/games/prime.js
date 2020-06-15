import gameStart from '../index.js';
import { getRandomNum } from '../random.js';

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

const getGameData = () => {
  const number = getRandomNum(2, 3571);
  const question = `${number}`;
  const correctAnswer = (isPrime(number));
  const gameData = [correctAnswer, question];
  return gameData;
};

const gameQuestion = 'Answer "yes" if the number is prime, otherwise answer "no".';
const prime = () => {
  gameStart(gameQuestion, getGameData);
};
export default prime;
