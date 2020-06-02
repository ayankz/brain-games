import gameStart from '../index.js';
import { getRandomNumber, getRandomOperator } from './random.js';


const getCorrectAnswer = (number1, number2, operator) => {
  const total = (operator === '+') ? number1 + number2 : number1 * number2;
  return total;
};

const getData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = getRandomOperator();
  const question = `${number1}${operator}${number2}`;
  const correct = (getCorrectAnswer(number1, number2, operator));
  const gameData = [correct, question];
  return gameData;
};

const calcQuestion = 'What is the result of the expression?';
const calc = () => {
  gameStart(calcQuestion, getData);
};
export default calc;
