// Write a JavaScript program to filter out the specified values from a specified array.
// Return the original array without the filtered values.


let filteredArray = (arr, ...arg) =>  arr.filter(v => !arg.includes(v));


let arr = [2, 16, 15, 18, 19 ,88, 20]
console.log(filteredArray(arr, 15, 20))
