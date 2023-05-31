import readlineSync from 'readline-sync';

const helloGreetings = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
// посмотреть документацию - как скрыть ответ имени
console.log (`Hello, ${name}!`);
};

export default helloGreetings;