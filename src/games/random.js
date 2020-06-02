// eslint-disable-next-line max-len
export const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);

export const operator = ['+', '*'];
// eslint-disable-next-line max-len
export const getRandomOperator = () => operator[Math.floor(Math.random() * operator.length)];
