// Write a JavaScript program to remove specified elements from the right of a given array of elements.

let arr = [1,2,3,4,5];

let remove_right = (arr, elements) => arr.slice(-elements)

console.log(remove_right(arr, 1))