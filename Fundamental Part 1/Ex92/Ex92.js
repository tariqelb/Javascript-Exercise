//  Write a JavaScript program to create a function that gets the argument at index n.
// If n is negative, the nth argument from the end is returned.

let nth_elm = (arg, n) => n > 0 ? arg[n] : arg[arg.length + n]

console.log(nth_elm([3,4,5,6,7,8,1,2,9], -6))

const nthArg = n => (...args) => args.slice(n)[0];
const third = nthArg(2);
third(1, 2, 3); // 3
third(1, 2); // undefined
const last = nthArg(-1);
console.log(last(1, 2, 3, 4, 5));

arr = [3,4,5,6,7,8,1,2,9];
console.log(arr.slice(3,4))
console.log(arr.slice(3)[0])
console.log(arr.slice(3)[1])
console.log(arr.slice(3)[2])
console.log(arr.slice(3)[3])