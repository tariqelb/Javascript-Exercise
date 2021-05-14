// Write a JavaScript function to validate whether a given value is RegExp or not.

let reg = (val) => toString.call(val) == '[object RegExp]'

console.log(reg(/A^l\?/))
console.log(reg(RegExp('AZ' , 'ig')))