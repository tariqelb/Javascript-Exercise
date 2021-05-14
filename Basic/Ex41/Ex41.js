// Write a JavaScript program to check three given numbers,
// if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

function checkSame(N1, N2, N3)
{
    if (N1 == N2 && N1 == N3)
        return 30;
    else if (N1 == N2 || N1 == N3 || N2 == N3)
        return 40;
    else
        return 20;
}

console.log(checkSame(5, 5, 5))