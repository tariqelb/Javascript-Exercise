//  Write a JavaScript program to map the values of an array to an object using a function,
// where the key-value pairs consist of the original value as the key and the mapped value.

let mapObj = (arr, fn) => 
    arr.reduce((ac,av) => 
        (ac[av] = fn(av),ac), {})


let mapped = arr => mapObj(arr, val => val * 2)
console.log(mapped([1,2,3]))

const mapObject = (arr, fn) =>
  (a => (
    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();
const squareIt = arr => mapObject(arr, a => a * a);
console.log(squareIt([1, 2, 3]));