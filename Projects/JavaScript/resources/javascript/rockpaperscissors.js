/*
ROCK, PAPER, SCISSORS GAME
*/
const getUserChoice = userChoice => {
    userChoice = userChoice.toLowerCase();
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors' || userChoice === 'bomb') {
      return userChoice;
    } else {
      console.log('Error!');
    }
  };
  
  getUserChoice('paper');
  
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = ''
    if (randomNumber === 0) {computerChoice = 'rock'}
    else if (randomNumber === 1) {computerChoice = 'paper'}
    else if (randomNumber === 2) {computerChoice = 'scissors'} else {console.log('Whoops!');}
    return computerChoice;
  }
  
  /* alternative version of getting computer's choice
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = ''
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        console.log('Whoops!');
  }
  }
  */
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie';
    }
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
           return 'Computer won';
      } else {
        return 'User won';
      }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
           return 'Computer won';
      } else {
        return 'User won';
      }
    }
      else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
           return 'Computer won';
    } else {
        return 'User won';
      }
    }
      else if (userChoice === 'bomb') {
           return 'User won';
      };
  };
  /*
  console.log(determineWinner('paper', 'scissors'));
  console.log(determineWinner('paper', 'paper'));
  console.log(determineWinner('paper', 'rock'));
  */
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();