// Write a JavaScript program to create a new string with the results of calling
// a provided function on every character in the calling string.

let str = (string, fn) => String(string.split('').map(ele => fn(ele))).replace(/,/g,'')
    
console.log(str("javascript" , char => char.toUpperCase()))


let str2 = (string, fn) => string.split('').map((char, i, str) => fn(char, i, str)).join('')

console.log(str2("javascript" , char => char.toUpperCase()))