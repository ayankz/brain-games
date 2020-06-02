import gameStart from '../index.js';
import { getRandomNumber } from './random.js';


const getCorrectAnswer = (randomNumber) => {
  const isEven = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return isEven;
};

const getData = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const correct = (getCorrectAnswer(randomNumber));
  const gameData = [correct, question];
  return gameData;
};

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = () => {
  gameStart(gameQuestion, getData);
};

export default even;
