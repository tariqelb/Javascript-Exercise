//  Write a JavaScript function that returns true if the provided predicate function
// returns true for all elements in a collection, false otherwise.

let predicate = (arr, fn = Boolean ) => arr.every(fn);

console.log(predicate([13,19,36, 28], x => x > 10));