// Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
//  . . . Each subsequent number is the sum of the previous two.

let nFib = (n) =>
{
    if (n == 1)
    return  [0,1]
    else if (n > 1)
    {
        arr = nFib(n-1)
        arr.push(arr[n-1] + arr[n-2])
        return arr;
    }
}

console.log(nFib(7))