// Dog human partner's actual age //
let myAge = 39;
console.log('Human age: ' + myAge);
// Dogs mature faster during their first 2 years //
let earlyYears = 2;
earlyYears *= 10.5;
console.log('Early years: ' + earlyYears);
// Since we already accounted for the first two years, taking the myAge variable, and subtracting 2 from it. //
let laterYears = myAge - 2;
// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by human's later years.//
laterYears *= 4;
console.log('Later years: ' + laterYears);
// summing up the ages to get human age in dog years //
let myAgeInDogYears = earlyYears + laterYears;
// dog's human partner's name //
let myName = 'Pavel'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);