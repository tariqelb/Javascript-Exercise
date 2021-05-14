// Write a JavaScript program to filter out the non-unique values in an array. 

let unique_val = (arr) => 
    arr.filter((e, i) => (i == arr.lastIndexOf(e) && i == arr.indexOf(e)))


console.log(unique_val([1,2,3,2,4,6,6,4]))