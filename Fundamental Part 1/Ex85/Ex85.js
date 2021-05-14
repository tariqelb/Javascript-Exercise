// Write a JavaScript program to replace all but the last number of characters with the specified mask character. 

let start_pad = (str, num = 5, char = "*") => 
    str.toString().slice(-num).padStart(str.toString().length, char)

console.log(start_pad(1234567890)); 
console.log(start_pad(1234567890, 3));
console.log(start_pad(1234567890, -4, '$'))

const mask = (cc, num = 4, mask = '*') =>
  ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);

console.log(mask(1234567890)); 
console.log(mask(1234567890, 3));
console.log(mask(1234567890, -4, '$'));