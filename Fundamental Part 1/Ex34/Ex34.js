// Write a JavaScript program to get a random integer in the specified range.


const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomIntegerInRange(-2, 5));