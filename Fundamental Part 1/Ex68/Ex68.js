
// Write a JavaScript program that accepts a converging function and a list of branching functions and returns
// a function that applies each branching function to the arguments and the results of the branching functions
// are passed as arguments to the converging function.

let branch = (fn1 ,...fn) => fn.reduce((f,g) => (...x) => fn1(x.reduce((a,b) => a + f(b) + g(b),0)))

let square = x => x * x
let add1 = x => parseInt(x) + 1;
let add2 = x => parseInt(x) + 2;
let add3 = x => parseInt(x) + 3;

let squareAdd = branch(square,add1,add2,add3);
console.log(squareAdd(1,1,1))



const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));
const average = converge((a, b) => a / b, [
  arr => arr.reduce((a, v) => a + v, 0),
  arr => arr.length
]);
console.log(average([ 6, 7]));
console.log(average([1, 2, 3, 4, 5, 6, 7]));