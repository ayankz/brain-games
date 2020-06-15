import gameStart from '../index.js';
import { getRandomNum, getRandomOperator } from '../random.js';


const getCorrectAnswer = (number1, number2, operator) => {
  if (operator === '+') {
    return number1 + number2;
  } if (operator === '*') {
    return number1 * number2;
  } return number1 - number2;
};

const getGameData = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);
  const operator = getRandomOperator();
  const question = `${number1}${operator}${number2}`;
  const correctAnswer = (getCorrectAnswer(number1, number2, operator));
  const gameData = [correctAnswer, question];
  return gameData;
};

const calcQuestion = 'What is the result of the expression?';
const calc = () => {
  gameStart(calcQuestion, getGameData);
};
export default calc;
