function getReminder() {
    console.log('Water the plants.');
  }
  getReminder();

function greetInSpanish() {
    console.log('Buenas Tardes.');
  }
  greetInSpanish();

  // PARAMETERS AND ARGUMENTS //

  function sayThanks(name){
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
  }
  
  sayThanks('Cole');

  // DEFAULT PARAMETERS //

  function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
  
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!

  // RETURN VALUE //

  function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }

  //

  function monitorCount(rows, columns) {
    return rows * columns;
  };
  
  const numOfMonitors = monitorCount(5, 4);
  
  console.log(numOfMonitors);

  // helper functions //

  function multiplyByNineFifths(number) {
    return number * (9/5);
  };
  
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
  
  getFahrenheit(15); // Returns 59

// In the example above:
// getFahrenheit() is called and 15 is passed as an argument.
// The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
// multiplyByNineFifths() takes the argument of 15 for the number parameter.
// The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
// 27 is returned back to the function call in getFahrenheit().
// getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
// Finally, 59 is returned back to the function call getFahrenheit(15).

//
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  
  const totalCost = costOfMonitors(5, 4);
  
  console.log(totalCost);
  // EXAMPLE //
  function newFunction(firstParameter, secondParameter) {
    return helperFunction(firstParameter, secondParameter) * 1000;
  };
  // WATERING A PLANT ON WEDNESDAYS //
  const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  }
  
  plantNeedsWater('Tuesday');
  
  console.log(plantNeedsWater('Tuesday')); // returns false //
  // ARROW FUNCTION //
  const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
// ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.
// Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:
  const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
  };
// Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.
// A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
// So if we have a function:
const squareNum = (num) => {
    return num * num;
  };
  // We can refactor the function to:
  const squareNum = num => num * num;
  //
  //
  //