// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

function multiOf(number)
{
    return (number % 3 == 0 || number % 7 == 0)
}

console.log(multiOf(12));