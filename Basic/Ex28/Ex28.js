// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
// Return true if either of them are in the said range.

function check2Nbr(N1, N2)
{
    return ((N1 > 49 && N1 < 100) || (N2 > 49 && N2 < 100));
}

console.log(check2Nbr(175 , 177))