import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain games!');
const helloName = (userName) => console.log(`Hello ${userName}`);
const iterations = 3;

const loop = (userName, getData) => {
  for (let i = 1; i <= iterations; i += 1) {
    const gameData = getData();
    const question = gameData[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correct = gameData[0];
    if (answer === correct.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const gameStart = (gameQuestion, getData) => {
  welcome();
  const userName = readlineSync.question('May I have your name? ');
  helloName(userName);
  console.log(gameQuestion);
  loop(userName, getData);
};

export default gameStart;
