// Write a JavaScript program to get the difference between a given number and 13,
// if the number is greater than 13 return double the absolute difference.

function deff13(number)
{
    if (number > 13)
        return Math.abs((13 - number) * 2);
    else
        return 13 - number;
}

console.log(deff13(32));