// Write a JavaScript program to initialize an array containing the numbers in the specified range
// where start and end are inclusive with their common difference step.

let array_of_range = (end, start, step = 1) => {
    let arr = Array.from(Array(Math.ceil((end - start + 1)/step)), (x,i) => x = start + (i * step) );
    return arr;
}

console.log(array_of_range(8,3))
console.log(array_of_range(6,0,2))
