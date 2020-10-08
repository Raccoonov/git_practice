// FINAL GRADE:
const finalGrade = (midterm, final, homework) => {
    let average;
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        const errMsg = 'You have entered an invalid grade.';
        return errMsg;
  } else {
    average = Math.round((midterm + final + homework) / 3);
  };
            if (average >= 0 && average <= 59) {
            return 'F';
          } else if (average >= 60 && average <= 69) {
            return 'D';
          } else if (average >= 70 && average <= 79) {
            return 'C';
          } else if (average >= 80 && average <= 89) {
            return 'B';
          } else if (average >= 90 && average <= 100) {
            return 'A';
          }
  }
  
  // Uncomment the line below when you're ready to try out your function
  
  console.log(finalGrade(99, 92, 95)) // Should print 'A'
  // We encourage you to add more function calls of your own to test your code!
  //
  // NEW: String output:
  const reportingForDuty = (rank, lastName) => {
    return (`${rank} ${lastName} reporting for duty!`);
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'
  //
  // NEW: object weight on different planets
  const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
      case 'Mercury':
      return earthWeight * 0.378;
      case 'Venus':
      return earthWeight * 0.907;
      case 'Mars':
      return earthWeight * 0.377;
      case 'Jupiter':
      return earthWeight * 2.36;
      case 'Saturn':
      return earthWeight * 0.916;
      default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
  }
  console.log(calculateWeight(100, 'Jupiter')) // Should print 236
  //
  // NEW: Truthy or Falsy
  const truthyOrFalsy = (input) => {
    if (input) {
      return true
    } else {
      return false
    }
  }
  //
  // NEW: Imaginary friends counter
  const numImaginaryFriends = (number) => {
    let thirtyThreePercent = Math.round(number * 0.33);
    return thirtyThreePercent;
  };
  console.log(numImaginaryFriends(18)) // Should print 6
  //
  // NEW: Silly sentence
  const sillySentence = (adj, verb, noun) => {
    return `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`
  }
  console.log(sillySentence('excited', 'love', 'functions')) 
  //
  // NEW: howOld()
  // Write your function here:
const howOld = (age, year) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
    const birthYear = currentYear - age;
    let whatAge;
    let ageDifference;
    if (year > currentYear) {
      whatAge = (year - currentYear) + age;
  //    return whatAge;
      return `You will be ${whatAge} in the year ${year}`;
    } else if (year < currentYear && year > birthYear) {
        whatAge = year - birthYear;
  //     ageDifference = year - birthYear;
  //      return whatAge;
          return `You were ${whatAge} in the year ${year}`;
    } else if (year < currentYear && year < birthYear) {
        whatAge = birthYear - year;
        ageDifference = Math.abs(year - birthYear);
  //      return whatAge;
          return `The year ${year} was ${ageDifference} years before you were born`;
    } else {
      return `You were born in ${year}`;
    }
  }
  console.log(howOld(14, 2000));
  //howOld(25, 2030);
  /*
  if (year > currentYear) 
  //
  if (year < currentYear && year > birthYear)
  if (year < currentYear && year < birthYear)
  //
  if (year > currentYear && year < birthYear)
  */
  // Once your function is written, write function calls to test your code!
  /*
  Мы знаем:
  1) Сейчас год (currentYear, 2020)
  2) Возраст человека сейчас (age, 25)
  3) Год запроса (year)
  4) Год рождения (currentYear - age, birthYear)
  
  0.1) 
  Если Год запроса > 2020 then A
  Если Год запроса < 2020 then ...
    Если Разница отрицательная, то В
    Если Разница положительная, то С
  
  0.2) 
  если year меньше 2020 но больше даты рождения, то
  если year меньше 2020 и меньше даты рождения, то
  
  0.3) 
  if (year < currentYear && year > birthYear) {
  
  };
  
  if (year < currentYear && year < birthYear) {
  
  };
  
  А) Год в будущем:
  (Год запроса - 2020) + Возраст человека сейчас
  
  B) Год в прошлом до даты рождения:
  Возраст человека сейчас = 25
  Год запроса = 1980
  Год рождения = 2020 - Возраст человека сейчас = 1995
  Год запроса - год рождения = 1980 - 1995 = 15 лет до рождения (-15)
  
  С) Год в прошлом, после даты рождения:
  Возраст человека сейчас = 25
  Год запроса = 2000
  Год рождения = 2020 - Возраст человека сейчас (25) = 1995
  Год запроса - Год рождения = 5
  Возраст в год запроса = Год запроса - Год рождения + возраст
  */
 //
 //
 //
// NEW: Calculate DNA percentage:
const whatRelation = percentSharedDNA => {
  if (percentSharedDNA === 100) {
      return 'You are likely identical twins.'
  };
  if (percentSharedDNA > 34) {
      return 'You are likely parent and child or full siblings.'
  };
  if (percentSharedDNA > 13) {
      return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
  }
  if (percentSharedDNA > 5) {
      return 'You are likely 1st cousins.'
  }

  if (percentSharedDNA > 2) {
      return 'You are likely 2nd cousins.'
  };
  if (percentSharedDNA > 0) {
      return 'You are likely 3rd cousins'
  };
  return 'You are likely not related.'
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'
//
//
// NEW Tip Calculator:
// Write your function here:
const tipCalculator = (quality, total) => {
  switch (quality) {
      case 'bad':
      return total * 0.05;
      case 'ok':
      return total * 0.15;
      case 'good':
      return total * 0.2;
      case 'excellent':
      return total * 0.3;
      default:
      return total * 0.18;
  }
}
// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20
console.log(tipCalculator('bad', 100)) //should return 5
console.log(tipCalculator('weird', 100)) //should return 18
// We encourage you to add more function calls of your own to test your code!
//
//
// NEW: toEmiticon()
// Write your function here:
const toEmoticon = (string) => {
  switch (string) {
      case 'shrug':
      return '|_{"}_|';
      case 'smiley face':
      return ':)';
      case 'frowny face':
      return ':(';
      case 'winky face':
      return ';)';
      case 'heart':
      return '<3';
      default:
      return '|_(* ~ *)_|';
  }
}
// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!
//
//
//