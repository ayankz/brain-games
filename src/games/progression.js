import gameStart from '../index.js';
import { getRandomNum } from '../random.js';

const getArray = () => {
  const array = [];
  const first = getRandomNum(1, 20);
  const increment = getRandomNum(2, 4);
  for (let i = first; i <= first + 30; i += increment) {
    array.push(i);
  }
  const secretIndex = getRandomNum(0, 9);
  const secretNumber = array[secretIndex];
  array[secretIndex] = '..';
  const arrayData = [array, secretNumber];
  return arrayData;
};

const getGameData = () => {
  const arrayData = getArray();
  const question = arrayData[0].join(' ');
  const correctAnswer = arrayData[1];
  const gameData = [correctAnswer, question];
  return gameData;
};

const gameQuestion = 'What number is missing in the progression?';
const progression = () => {
  gameStart(gameQuestion, getGameData);
};
export default progression;
