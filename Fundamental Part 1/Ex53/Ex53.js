// Write a JavaScript program to Initialize a two dimension array of given width and height and value.


let array_of = (width, height, value) => {
    arr =  Array.from({length : height}).map(() => Array.from({length : width}).fill(value))
    return arr
}

console.log(array_of(3,2,2))

const M = 3, N = 4, v = 2;
 
var arr = Array.from(Array(M), () => new Array(N).fill(v));
console.log(arr);