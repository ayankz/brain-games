import gameStart from '../index.js';
import getRandomNum from '../random.js';

const description = 'What number is missing in the progression?';
const maxStep = 6;
const rowOfnumbersLength = 10;
const makeProgression = () => {
  const rowOfnumbers = [];
  const firstNumber = getRandomNum();
  const step = getRandomNum(1, maxStep);
  
  for (let i = 0; i < rowOfnumbersLength; i += 1) {
    rowOfnumbers[i] = firstNumber + i * step;
  }
  const progressions = rowOfnumbers;
  return progressions;
};

const getGameData = () => {
  const progressions = makeProgression();
  const secretIndex = getRandomNum(0, rowOfnumbersLength);
  const secretNumber = progressions[secretIndex];
  progressions[secretIndex] = '..';
  const question = progressions.join(' ');
  const correctAnswer = secretNumber;
  const gameData = [correctAnswer, question];
  return gameData;
};

const progression = () => gameStart(description, getGameData);

export default progression;
