// setting the tº in K to be 293K //
const kelvin = 300;
console.log('Kelvin: ' + kelvin + ' degrees');
//the difference between K and C is 273 points //
const diffKC = 273;
// substracting the difference from K to get C //
let celsius = kelvin - diffKC;
console.log('Celsius: ' + celsius + ' degrees');
let fahrenheit = celsius * (9/5) + 32;
// rounding up the F output //
fahrenheit = Math.floor(fahrenheit);
console.log('Fahrenheit: ' + fahrenheit + ' degrees');