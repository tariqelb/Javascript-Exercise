// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

function check8(N1, N2)
{
    if (N1 == 8 || N2 == 8)
        return true;
    else if ((N1 + N2) == 8 || (N1 - N2) == 8)
        return true;
    else
        return false;
}

console.log(check8(4, 5))