// Write a JavaScript function to validate whether a given value type is error or not.

let er = Error("I'm error");

let err = (val) => val instanceof Error || toString.call(val) ===  '[object error]';

console.log(err(er))