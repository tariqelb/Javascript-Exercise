// Write a JavaScript program to filter out the element(s) of a given array, that have one of the specified values.

let filter_out = (arr, ...arg) =>  arr.filter(ele => !arg.includes(ele))

console.log(filter_out([1,2,3], 1))