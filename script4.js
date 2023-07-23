// Choose your own Adventure (Game)

const prompt = require("prompt-sync")();

function playGame() {
  const answer = prompt("Would you like to play a game? (y/n) ");

  if (answer.toLowerCase() === "y") {
    const answer2 = prompt("Would you like to go left or right? (left/right) ");
    if (answer2.toLowerCase() === "left") {
      console.log("You went left and you fell off a bridge! You lost!!!");
    } else if (answer2.toLowerCase() === "right") {
      console.log(
        "You went right, approached a bridge, and you won the game!!!"
      );

      let validOptionChosen = false;
      while (!validOptionChosen) {
        const answer3 = prompt(
          "Would you like to cross the bridge, or turn around and find another way (cross/turn)? "
        );
        if (answer3.toLowerCase() === "cross") {
          console.log("You crossed the bridge and you won the game!!!");
          validOptionChosen = true;
        } else if (answer3.toLowerCase() === "turn") {
          console.log("You turned around and you lost the game!!!");
          validOptionChosen = true;
        } else {
          console.log("Invalid input! Please enter 'cross' or 'turn'.");
        }
      }
    } else {
      console.log("Invalid input! Please enter 'left' or 'right'.");
      playGame(); // Replaying the game after an invalid input
    }
  } else if (answer.toLowerCase() === "n") {
    console.log("That's too bad but still, Goodbye then!");
  } else {
    console.log("Invalid input! Please enter 'y' or 'n'.");
    playGame(); // Replaying the game after an invalid input
  }
}

playGame();
