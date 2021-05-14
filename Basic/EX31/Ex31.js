//  Write a JavaScript program to find the largest of three given integers.

function largestNumber(N1, N2, N3)
{
    let largest = (N1 > N2) ?  N1 : N2;
    largest = (largest > N3) ? largest : N3;
    return largest;
}

console.log(largestNumber(95 , 168, 45));