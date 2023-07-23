// Quiz Game

const prompt = require("prompt-sync")();

console.log("Welcome to the Computer Hardware Quiz!");

let score = 0;
const totalQuestions = 3;

const answer1 = prompt("What does CPU stand for? ");
const correctAnswer1 = "central processing unit";

if (answer1.toLowerCase() === correctAnswer1) {
  console.log("Correct!");
  score++;
} else {
  console.log("Incorrect!");
}

const answer2 = prompt("What does GPU stand for? ");
const correctAnswer2 = "graphics processing unit";

if (answer2.toLowerCase() === correctAnswer2) {
  console.log("Correct!");
  score++;
} else {
  console.log("Incorrect!");
}

const answer3 = prompt("What does RAM stand for? ");
const correctAnswer3 = "random access memory";

if (answer3.toLowerCase() === correctAnswer3) {
  console.log("Correct!");
  score++;
} else {
  console.log("Incorrect!");
}

const percent = Math.round((score / totalQuestions) * 100);

console.log(`Your score is ${score} out of 3.`);
console.log(`You got ${percent}% correct.`);
