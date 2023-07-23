// Random Number Guesser

const prompt = require("prompt-sync")();

console.log("Welcome to the Random Number Guesser!");

const target = Math.round(Math.random() * 100);

let guesses = 0;

while (true) {
  const guess = Number(prompt("Guess a number (0-100): "));
  if (guess > target) {
    console.log("Too high!");
    guesses++;
  } else if (guess < target) {
    console.log("Too low!");
    guesses++;
  } else {
    console.log("Correct! You got it in " + guesses + " guesses.");
    break;
  }
}
