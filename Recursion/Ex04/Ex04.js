// Write a JavaScript program to compute the sum of an array of integers.

let sum = (arr) => {
    let sm = 0;
    if (arr.length == 1)
    {
        return arr[0]
    }
    return arr[arr.length-1] + sum(arr.slice(0,arr.length-1))
    // return arr.pop() + sum(arr)
}

console.log(sum([1,2,3,4,5]))

