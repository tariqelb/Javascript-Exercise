// Write a JavaScript program to check whether all elements in a given array are equal or not.

let are_equal = (arr) => arr.every((e) => arr[0] == e)

console.log(are_equal([1,1,1,1,1]))