// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
// Return true if one or more of them are in the said range.

function check3Nbr(N1, N2, N3)
{
    return ((N1 > 49 && N1 < 100) || (N2 > 49 && N2 < 100) || (N3 > 49 && N3 < 100));
}

console.log(check3Nbr(175 , 177, 66))