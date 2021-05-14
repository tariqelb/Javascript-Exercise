// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function nearest(N1, N2)
{
    return (Math.abs(100 - N1) < Math.abs(100 - N2)) ? N1 : N2;
}

console.log(nearest(97, 98));