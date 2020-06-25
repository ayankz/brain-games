import gameStart from '../index.js';
import { getRandomNum } from '../random.js';

const getColl = () => {
  const array = [];
  const firstNumber = getRandomNum(0, 20);
  const step = getRandomNum(1, 6);
  const arrayLength = 10;
  const secretIndex = getRandomNum(0, arrayLength);
  for (let i = 0; i < arrayLength; i += 1) {
    array[i] = firstNumber + i * step;
  }
  const secretNumber = array[secretIndex];
  array[secretIndex] = '..';
  const arrayData = [array, secretNumber];
  return arrayData;
};

const getGameData = () => {
  const arrayData = getColl();
  const [array, secretNumber] = arrayData;
  const question = array.join(' ');
  const correctAnswer = secretNumber;
  const gameData = [correctAnswer, question];
  return gameData;
};

const gameQuestion = 'What number is missing in the progression?';
const progression = () => gameStart(gameQuestion, getGameData);

export default progression;
