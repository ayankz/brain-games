import gameStart from '../index.js';
import getRandomNum from '../random.js';

const description = 'What number is missing in the progression?';
const maxStep = 6;
const progressionLength = 10;
const makeProgression = () => {
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
  const secretIndex = getRandomNum(0, progressionLength);
  const secretNumber = progression[secretIndex];
  progression[secretIndex] = '..';
  const question = progression.join(' ');
  const correctAnswer = secretNumber;
  const gameData = [correctAnswer, question];
  return gameData;
};

const progression = () => gameStart(description, getGameData);

export default progression;
