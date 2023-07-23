// Rock Paper Scissors Game

const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

const choice = prompt("Choose rock, paper, or scissors: ");
if (choice === "rock" || choice === "paper" || choice === "scissors") {
  const random = Math.random();
  let computerChoice = "";
  if (random < 0.33) {
    computerChoice = "rock";
  } else if (random < 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log("Computer chose " + computerChoice + ".");

  if (choice === computerChoice) {
    console.log("It's a tie!");
    ties++;
  } else if (choice === "rock" && computerChoice === "scissors") {
    console.log("You win!");
    wins++;
  } else if (choice === "paper" && computerChoice === "rock") {
    console.log("You win!");
    wins++;
  } else if (choice === "scissors" && computerChoice === "paper") {
    console.log("You win!");
    wins++;
  } else {
    console.log("You lose!");
    losses++;
  }

  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
  console.log("Ties: " + ties);
}
