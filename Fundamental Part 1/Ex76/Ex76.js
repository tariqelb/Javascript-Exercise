// Write a JavaScript program to execute a provided function once for each array element,
// starting from the array's last element.


let arr_exe = (arr, fn) => arr.map((el, i) => fn(arr[arr.length - ++i]))

console.log(arr_exe([5,4,3,2], x => x + 2))

const forEachRight = (arr, callback) =>
  arr.slice(0).reverse().forEach(callback);
forEachRight([1, 2, 3, 4], val => console.log(val));

