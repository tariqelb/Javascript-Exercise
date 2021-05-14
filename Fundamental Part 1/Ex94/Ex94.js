// Write a JavaScript program to move the specified amount of elements to the end of the array.


let mov = (arr, n_ele) => [...arr.slice(n_ele).concat(arr.slice(0,n_ele))]
arr = [1,2,3,4,5];
console.log(mov(arr,2))
console.log(mov(arr,-2))