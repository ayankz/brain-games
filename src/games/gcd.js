import gameStart from '../index.js';
import { getRandomNumber } from './random.js';

const getNOD = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  } return getNOD(number2, number1 % number2);
};

const getData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correct = (getNOD(number1, number2));
  const gameData = [correct, question];
  return gameData;
};

const gameQuestion = 'Find the greatest common divisor of given numbers?';
const gcd = () => {
  gameStart(gameQuestion, getData);
};
export default gcd;
