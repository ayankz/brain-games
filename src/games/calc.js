import gameStart from '../index.js';
import { getRandomNum, getRandomOperator } from '../random.js';

const gameQuestion = 'What is the result of the expression?';
const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    case '-':
      return number1 - number2;
    default:
      throw new Error(operator);
  }
};

const getGameData = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, number1);
  const operator = getRandomOperator();
  const question = `${number1}${operator}${number2}`;
  const correctAnswer = calculate(number1, number2, operator);
  const gameData = [correctAnswer, question];
  return gameData;
};

const calc = () => gameStart(gameQuestion, getGameData);

export default calc;
