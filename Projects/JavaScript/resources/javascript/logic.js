// IF ... ELSE LOGIC //

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

// ELSE IF OPERATOR //

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// TERNARY OPERATOR //

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

(favoritePhrase === 'Love That!') ? console.log('I love that!') : console.log("I don't love that!");

// SWITCH OPERATOR //

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

// THE EIGHT BALL FORTUNE TELLER //

let userName = '';

userName = 'Anonimous'

userName ? console.log(`hello ${userName}`) : console.log('Hello!');

let userQuestion = 'Is COVID-19 a plandemic?';

console.log(`${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
} else {
  console.log('Invalid input');
};

console.log(`Magic Eight Ball says: ${eightBall}`);

// MAGIC EIGHT BALL FORTUNE TELLER WITH SWITCH OPERATOR //

let userName = '';

userName = 'Anonimous'

userName ? console.log(`hello ${userName}`) : console.log('Hello!');

let userQuestion = 'Is COVID-19 a plandemic?';

console.log(`${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;  
  case 5:
    eightBall = 'My sources say no';
    break;  
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    console.log('Invalid input');
    break;
}

console.log(`Magic Eight Ball says: ${eightBall}`);

// RACE DAY SCHEDULE //

let raceNumber = Math.floor(Math.random() * 1000);

const isEarly = false;

const runnerAge = 18;

// EARLY ADULTS //

if (runnerAge > 18 && isEarly === true) {
  raceNumber += 1000;
};

if (runnerAge > 18 && isEarly === true) {
  console.log(`Racer with the number ${raceNumber} will be racing at 9:30 AM`);
} ;

// LATE ADULTS //

if (runnerAge > 18 && isEarly === false) {
  raceNumber += 1000;
};

if (runnerAge > 18 && isEarly === false) {
  console.log(`Racer with the number ${raceNumber} will be racing at 11:00 AM`);
};

// YOUTH & 18 YEARS OLDS //

if (runnerAge < 18) {
  console.log(`Racer with the number ${raceNumber} will be racing at 12:30 AM`);
} else if (runnerAge === 18) {
  console.log('Please see the registration desk');
};
