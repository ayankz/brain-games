import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain games!');
const getName = (userName) => console.log(`Hello ${userName}`);
const iterations = 3;

const loop = (userName, getGameData) => {
  for (let i = 1; i <= iterations; i += 1) {
    const gameData = getGameData();
    const [correctAnswer, question] = gameData;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const gameStart = (gameQuestion, getGameData) => {
  welcome();
  const userName = readlineSync.question('May I have your name? ');
  getName(userName);
  console.log(gameQuestion);
  loop(userName, getGameData);
};

export default gameStart;
