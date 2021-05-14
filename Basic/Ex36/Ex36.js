// Write a JavaScript program to check whether the last digit of the three given positive integers is same.

function lastDigit(N1, N2, N3)
{
    let n1 = N1.toString();
    let n2 = N2.toString();
    let n3 = N3.toString();

    return (n1[n1.length - 1] == n2[n2.length -1] && n2[n2.length -1] == n3[n3.length -1]) 
}

console.log(lastDigit(0.5, 4575, 665))