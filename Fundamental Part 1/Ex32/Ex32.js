// Write a JavaScript program to get the sum of a given array, 
// after mapping each element to a value using the provided function.

let map_sum = (arr, fn) => {
    return arr.map((typeof fn == 'function') ? fn : val => val[fn]).reduce((ac,av) => ac + av)
}

// console.log(map_sum([{n:2},{n:4},{n:6},{n:8}], "n"));
console.log(map_sum([{n:2},{n:4},{n:6},{n:8}], v => v.n));