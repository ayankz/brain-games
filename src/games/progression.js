import gameStart from '../index.js';
import getRandomNum from '../random.js';

const description = 'What number is missing in the progression?';
const makeProgression = () => {
  const progressionLength = 10;
  const maxStep = 6;
  const progression = [];
  const firstNumber = getRandomNum();
  const step = getRandomNum(1, maxStep);
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstNumber + i * step;
  }
  return progression;
};

const getGameData = () => {
  const progression = makeProgression();
  const secretIndex = getRandomNum(0, progression.length);
  const secretNumber = progression[secretIndex];
  progression[secretIndex] = '..';
  const question = progression.join(' ');
  const correctAnswer = secretNumber.toString();
  const gameData = [correctAnswer, question];
  return gameData;
};

export default () => gameStart(description, getGameData);
