// Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length. 

let padding = (str, length, char) => {
 
    return str.padStart((str.length + length) / 2 , char).padEnd(length, char);
}

console.log(padding('42', 6, "*"))
console.log(padding('42', 5, "*"))
console.log(padding('42', 4, "*"))
console.log(padding('42', 3, "*"))

