// Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays. 


let combine = (arr1, arr2) => 
     arr1.reduce((ac, x) => ac.concat(arr2.map(y => [x, y])), [])


console.log(combine([1,2], ["a","b"]));