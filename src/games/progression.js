import gameStart from '../index.js';
import { getRandomNumber } from './random.js';

const getArray = () => {
  const array = [];
  const first = getRandomNumber(1, 20);
  const increment = getRandomNumber(2, 4);
  for (let i = first; i <= first + 30; i += increment) {
    array.push(i);
  }
  const secretIndex = getRandomNumber(0, 9);
  const secretNumber = array[secretIndex];
  array[secretIndex] = '..';
  const arrayData = [array, secretNumber];
  return arrayData;
};

const getData = () => {
  const arrayData = getArray();
  const question = arrayData[0].join(' ');
  const correct = arrayData[1];
  const gameData = [correct, question];
  return gameData;
};

const gameQuestion = 'What number is missing in the progression?';
const progression = () => {
  gameStart(gameQuestion, getData);
};
export default progression;
