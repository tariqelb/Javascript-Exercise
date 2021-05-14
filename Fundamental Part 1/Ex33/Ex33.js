// Write a JavaScript program to get a random number in the specified range.

let num_in_range = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(num_in_range(1,7))


let num_in_range1 = (min, max) => {
    return Math.random() * (max - min) + min;
}
console.log(num_in_range1(1,7))