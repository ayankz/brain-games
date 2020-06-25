import gameStart from '../index.js';
import { getRandomNum } from '../random.js';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  } return gcd(number2, number1 % number2);
};

const getGameData = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);
  const gameData = [correctAnswer, question];
  return gameData;
};

const gameQuestion = 'Find the greatest common divisor of given numbers?';
const getGcd = () => gameStart(gameQuestion, getGameData);

export default getGcd;
