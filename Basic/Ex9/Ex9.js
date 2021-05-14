// Write a JavaScript program to calculate days left until next Christmas.

let year = new Date().getFullYear() + 1;
let days = Math.floor((new Date(year, 0 ,1) - new Date()) / 1000 / 60 / 60 / 24);
console.log("The number of days left until the next Christmas is : ", days);