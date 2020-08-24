import gameStart from '../index.js';
import getRandomNum from '../random.js';

const description = 'What is the result of the expression?';
const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    case '-':
      return number1 - number2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getGameData = () => {
  const operator = ['+', '*', '-'];
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, number1);
  const getRandomoperator = operator[getRandomNum(0, operator.length)];
  const question = `${number1}${getRandomoperator}${number2}`;
  const correctAnswer = calculate(number1, number2, getRandomoperator).toString();
  const gameData = [correctAnswer, question];
  return gameData;
};

export default () => gameStart(description, getGameData);
