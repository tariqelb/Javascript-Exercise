// Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]


// go to https://www.mathsisfun.com/combinatorics/combinations-permutations-calculator.html for more info

function fct(n)//factorial
{
    let i = 1;
    let rst = 1
    while (i <= n)
        rst = rst * i++
    return rst
}
// console.log(fct(7))

function combinations(arr, length) {
    let combinition = fct(arr.length) / (fct(length) * fct(arr.length - length))
    let rst = Array(combinition).fill(0).map(e => Array(length).fill(0));
    let i = 0;
    arr2 = rst.map(e => e.map(a =>
        {
            (i == arr.length) ? i = 0 : i
             a = arr[i++]
            return a 
        }))
    return arr2
}

console.log(combinations([1,2,3,4],3))
console.log(combinations([1,2,3,4,5],3))






// let arr = Array(4).fill(0).map(e => Array(3).fill(0))
// console.log(arr2)


// non complete