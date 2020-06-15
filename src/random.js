
export const getRandomNum = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);

const operator = ['+', '*', '-'];

export const getRandomOperator = () => operator[Math.floor(Math.random() * operator.length)];
