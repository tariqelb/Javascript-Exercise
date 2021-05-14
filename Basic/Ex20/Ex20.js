// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

function checkSign(N1, N2)
{
    return ((N1 > 0 && N2 < 0) || (N1 < 0 && N2 > 0));
}

console.log(checkSign(5, -5));