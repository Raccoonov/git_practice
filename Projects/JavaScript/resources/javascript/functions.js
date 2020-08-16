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

  //


