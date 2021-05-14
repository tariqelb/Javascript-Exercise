//  Write a JavaScript program to remove specified elements from the left of a given array of elements. 

let remove_left = (arr, elements = 1) => arr.slice(elements)


console.log(remove_left([1,2,3,4], 2));