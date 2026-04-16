import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const runCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  
  let correctAnswers = 0;
  const roundsToWin = 3;
  
  while (correctAnswers < roundsToWin) {
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 30);
    const operator = getRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = String(calculate(num1, num2, operator));
    
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  
  console.log(`Congratulations, ${name}!`);
};

export default runCalcGame;