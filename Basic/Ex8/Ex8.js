// Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number. If the user input matches with guess number,
// the program will display a message "Good Work" otherwise display a message "Not matched".

let number = Math.ceil(Math.random(1, 10) * 10)
console.log(number);
let ran = prompt("write a number between 1 and 10:");

if (number === parseInt(ran))
    console.log("Good work");
else
    console.log("Not matched");