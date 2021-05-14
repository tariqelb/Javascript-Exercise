// Write a JavaScript program to get the median of an array of numbers.

let median = (arr) =>{ 
    a = arr.sort();
    return (b = a.length) % 2 === 0 ? (a[b/2] + a[b/2 - 1]) / 2 : a[Math.floor(b)/ 2]
}

console.log(median([1,2,3,4,5,6]))