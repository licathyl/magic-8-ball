// Define a variable named userName and set it as an empty string
let userName = 'Cathy';
// Create a ternary expression  that decides what to do if user enters a name or not
if (userName) {
  console.log(`Hello, ${userName}!`);
} else {
  console.log('Hello!');
}

// Create a variable named userQuestion, value is a string
let userQuestion = 'Will I win the lottery today?';
// console.log() userQuestion and can include user's name 
console.log(`${userName} asks: ${userQuestion}`);

// Create a variable named randomNumber 
let randomNumber = Math.floor(Math.random() * 8);

// Create another variable named eightBall, set it to an empty string
let eightBall ='';

// Create control flow that takes in randomNumber and assigns an answer to eightBall
if (randomNumber == 0) {
  eightBall = 'It is certain';
} else if (randomNumber == 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber == 2) {
  eightBall = 'Reply hazy, try again';
} else if (randomNumber == 3) {
  eightBall = 'Cannot predict right now';
} else if (randomNumber == 4) {
  eightBall = "Don't count on it";
} else if (randomNumber == 5) {
  eightBall = 'My sources say no';
} else if (randomNumber == 6) {
  eightBall = 'Outlook not so good';
} else if (randomNumber == 7) {
  eightBall = 'Signs point to yes';
}

console.log(eightBall);
