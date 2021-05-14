// Write a JavaScript function which returns the n rows by n columns identity matrix;

function matrix(n) {
    // let arr = Array.from(Array(n).fill().map(a => Array(n).fill(0)) )
    let arr = Array(n).fill().map(a => Array(n).fill(0))
    return arr
}

console.table(matrix(5))
// console.log(matrix(2))
// console.log(Array(3,5,3))