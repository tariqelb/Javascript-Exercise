// write a JavaScript function to validate whether a given value is number or not.

let nbr = (val) => typeof(val) == 'number' 

console.log(nbr(Number(12)))
console.log(nbr(12))
console.log(nbr('12'))


let isnbr = (val) => !isNaN(val) && toString.call(val) == '[object Number]'

console.log(isnbr(34))