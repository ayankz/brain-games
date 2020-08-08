import gameStart from '../index.js';
import getRandomNum from '../random.js';

const description = 'What number is missing in the progression?';
const maxStep = 6;
const makeProgression = () => {
  const rowOfnumbers = [];
  const firstNumber = getRandomNum();
  const step = getRandomNum(1, maxStep);
  const rowOfnumbersLength = 10;
  const secretIndex = getRandomNum(0, rowOfnumbersLength);
  for (let i = 0; i < rowOfnumbersLength; i += 1) {
    rowOfnumbers[i] = firstNumber + i * step;
  }
  const secretNumber = rowOfnumbers[secretIndex];
  rowOfnumbers[secretIndex] = '..';
  const progressions = [rowOfnumbers, secretNumber];
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

const progression = () => gameStart(description, getGameData);

export default progression;
