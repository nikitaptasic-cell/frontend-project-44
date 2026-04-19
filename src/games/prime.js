import readlineSync from 'readline-sync';

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function runPrimeGame() {
  console.log('Welcome to the Brain Games!');
  
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  
  let correctAnswers = 0;
  const roundsToWin = 3;
  
  while (correctAnswers < roundsToWin) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    
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
}

export default runPrimeGame;