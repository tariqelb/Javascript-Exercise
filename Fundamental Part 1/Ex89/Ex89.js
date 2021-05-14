// Write a JavaScript program to negates a predicate function.


let negate1 = fn => (...arg) => !fn(...arg);

console.log([1,2,3,4,5].filter(negate1(x => (x % 2) == 0)))
