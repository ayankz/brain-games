import gameStart from '../index.js';
import getRandomNum from '../random.js';

const description = 'What number is missing in the progression?';
const maxStep = 6;
const rowOfnumbersLength = 10;
const makeProgressionWithSecretNumber = () => {
  const rowOfnumbers = [];
  const firstNumber = getRandomNum();
  const step = getRandomNum(1, maxStep);
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
  const progressions = makeProgressionWithSecretNumber();
  const [progression, secretNumber] = progressions;
  const question = progression.join(' ');
  const correctAnswer = secretNumber;
  const gameData = [correctAnswer, question];
  return gameData;
};

const progression = () => gameStart(description, getGameData);

export default progression;
