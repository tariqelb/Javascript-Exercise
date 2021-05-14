// Write a JavaScript function to validate whether a given value type is char or not

let char = (val) => toString.call(val) == '[object String]' && val.length == 1

console.log(char('R'))