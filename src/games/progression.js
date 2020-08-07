import gameStart from '../index.js';
import getRandomNum from '../random.js';

const discription = 'What number is missing in the progression?';
const maxStep = 6;
const makeProgression = () => {
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
  const progressions = [coll, secretNumber];
  return progressions;
};

const getGameData = () => {
  const progressions = makeProgression();
  const [coll, secretNumber] = progressions;
  const question = coll.join(' ');
  const correctAnswer = secretNumber;
  const gameData = [correctAnswer, question];
  return gameData;
};

const progression = () => gameStart(discription, getGameData);

export default progression;
