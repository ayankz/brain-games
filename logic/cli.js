import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
const call = () => {
  console.log(`Hello, ${name}!`);
};
export const congrats = () => {
  console.log(`Congratulations, ${name}`);
};

export default call;
