import gameStart from '../index.js';
import { getRandomNum } from '../random.js';


const getCorrectAnswer = (randomNumber) => {
  const isEven = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return isEven;
};

const getGameData = () => {
  const randomNumber = getRandomNum(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = (getCorrectAnswer(randomNumber));
  const gameData = [correctAnswer, question];
  return gameData;
};

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = () => {
  gameStart(gameQuestion, getGameData);
};

export default even;
