// Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum. 

function sum(N1, N2)
{
    if (N1 == N2)
        return (N1 + N2) * 3;
    else
        return N1 + N2;
}

console.log(sum(5, 4));