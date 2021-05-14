// Write a JavaScript program to cast the provided value as an array if it's not one.

let cast_array = (arg) => 
    (arg instanceof Array) ? arg : Array(arg)

console.log(cast_array("AS"));
console.log(cast_array([100]));

const castArray = val => (Array.isArray(val) ? val : [val]);
console.log(castArray('w3r')); 
console.log(castArray([100]));