import gameStart from '../index.js';
import getRandomNum from '../random.js';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';
const maxSimpleNumber = 3571;
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
  }
  return 'no';
};

const getGameData = () => {
  const question = getRandomNum(2, maxSimpleNumber);
  const correctAnswer = getCorrectAnswer(question);
  const gameData = [correctAnswer, question];
  return gameData;
};

const prime = () => gameStart(description, getGameData);

export default prime;
