import gameStart from '../index.js';
import { getRandomNum } from '../random.js';

const getNOD = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  } return getNOD(number2, number1 % number2);
};

const getGameData = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = (getNOD(number1, number2));
  const gameData = [correctAnswer, question];
  return gameData;
};

const gameQuestion = 'Find the greatest common divisor of given numbers?';
const gcd = () => {
  gameStart(gameQuestion, getGameData);
};
export default gcd;
