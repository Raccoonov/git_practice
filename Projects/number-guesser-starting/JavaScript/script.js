let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// target number
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(humanGuess - targetGuess);
  const computerDifference = Math.abs(computerGuess - targetGuess);
  return humanDifference <= computerDifference;
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore = humanScore + 1;
    //    humanScore++;
  } else if (winner === 'computer') {
    computerScore = computerScore + 1;
    //    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;

/*
Great work! If you’d like to see the solution, move to the next task. If you’d like to extend your project on your own, you could consider the following:

You probably calculated the distance from the computer guess to the target and from the human guess to the target. Move this into a separate getAbsoluteDistance() function that takes two numbers and returns the distance, and then use that inside your compareGuesses() function.
Add functionality to check whether the user guess is between 0 and 9 and alert() the user that their number is out of range. It’s not possible to set a number outside this range with the + and = buttons, but users can do so by typing directly in the input field.
*/
