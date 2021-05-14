//Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80.

function sumInRange(N1, N2)
{
    let num = N1 + N2;
    return (num > 49 && num < 81) ? 65 : 80;
}

console.log(sumInRange(45, 13));