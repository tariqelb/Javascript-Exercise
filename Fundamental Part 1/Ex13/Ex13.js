// Write a JavaScript program to convert the length of a given string in bytes

let number_of_byte = (str) => new Blob([str]).size;

console.log(number_of_byte("tariq"))