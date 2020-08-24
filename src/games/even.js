import gameStart from '../index.js';
import getRandomNum from '../random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');
const getGameData = () => {
  const question = getRandomNum(1, 100);
  const correctAnswer = getCorrectAnswer(question);
  const gameData = [correctAnswer, question];
  return gameData;
};

export default () => gameStart(description, getGameData);
