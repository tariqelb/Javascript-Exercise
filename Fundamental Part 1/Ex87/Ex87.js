//  Write a JavaScript program to get the n maximum elements from the provided array.
// If n is greater than or equal to the provided array's length,
// then return the original array(sorted in descending order).


let n_max = (arr, n) => 
    n >= arr.length ? [...arr].sort((a,b) => a < b) : [...arr].sort((a,b) => a < b).filter((e,i) => i < n)


console.log(n_max([11,52,5,44], 3))

const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
console.log(maxN([1, 2, 3]));
console.log(maxN([1, 2, 3], 2));