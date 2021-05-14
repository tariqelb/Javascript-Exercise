// Write a JavaScript program to count the occurrences of a value in an array.

let occurences = (arr, val) => arr.filter(v => v === val).length

console.log(occurences([12,3,3,3,1,5,4],3))

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));