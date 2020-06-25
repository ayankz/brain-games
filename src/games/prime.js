import gameStart from '../index.js';
import { getRandomNum } from '../random.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  const maxDivisor = Math.sqrt(number) + 1;
  for (let i = 2; i < maxDivisor; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getCorrectAnswer = (number) => {
  if (isPrime(number)) {
    return 'yes';
  } return 'no';
};

const getGameData = () => {
  const maxSimpleNumber = 3571;
  const number = getRandomNum(2, maxSimpleNumber);
  const question = number;
  const correctAnswer = getCorrectAnswer(question);
  const gameData = [correctAnswer, question];
  return gameData;
};

const gameQuestion = 'Answer "yes" if the number is prime, otherwise answer "no".';
const prime = () => gameStart(gameQuestion, getGameData);

export default prime;
