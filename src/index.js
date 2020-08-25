import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain games!');
const greeting = (userName) => console.log(`Hello ${userName}`);
const iterationsCount = 3;

const getAnswer = (userName, getGameData) => {
  for (let i = 1; i <= iterationsCount; i += 1) {
    const [correctAnswer, question] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};


const gameStart = (description, getGameData) => {
  welcome();
  const userName = readlineSync.question('May I have your name? ');
  greeting(userName);
  console.log(description);
  getAnswer(userName, getGameData);
};

export default gameStart;
