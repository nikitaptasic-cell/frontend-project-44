import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateProgression = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);
  
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  
  return {
    question: progression.join(' '),
    correctAnswer,
  };
};

const runProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  
  let correctAnswers = 0;
  const roundsToWin = 3;
  
  while (correctAnswers < roundsToWin) {
    const { question, correctAnswer } = generateProgression();
    
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

export default runProgressionGame;