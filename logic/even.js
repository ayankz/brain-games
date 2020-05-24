import readlineSync from 'readline-sync';
import getRandomNumber from './random.js';
import call, { congrats, name } from './cli.js';

const needWins = 3;
let wins = 0;
const evenStart = () => {
  call();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= needWins; i += 1) {
    const randomNumber = getRandomNumber();
    const isCorrect = (randomNumber % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isCorrect) {
      console.log('Correct!');
      wins += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;( Correct answer is "${isCorrect}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (wins === needWins) {
    congrats();
  }
};

export default evenStart;
