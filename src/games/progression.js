import gameStart from '../index.js';
import { getRandomNum } from '../random.js';

const gameQuestion = 'What number is missing in the progression?';
const maxStep = 6;
const getColl = () => {
  const coll = [];
  const firstNumber = getRandomNum();
  const step = getRandomNum(1, maxStep);
  const arrayLength = 10;
  const secretIndex = getRandomNum(0, arrayLength);
  for (let i = 0; i < arrayLength; i += 1) {
    coll[i] = firstNumber + i * step;
  }
  const secretNumber = coll[secretIndex];
  coll[secretIndex] = '..';
  const arrayData = [coll, secretNumber];
  return arrayData;
};

const getGameData = () => {
  const arrayData = getColl();
  const [coll, secretNumber] = arrayData;
  const question = coll.join(' ');
  const correctAnswer = secretNumber;
  const gameData = [correctAnswer, question];
  return gameData;
};

const progression = () => gameStart(gameQuestion, getGameData);

export default progression;
