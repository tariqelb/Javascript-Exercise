// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function check50(N1, N2)
{
    if (N1 == 50 || N2 == 50 || N1 + N2 == 50)
        return true;
    else
        return false;
}

console.log(check50(23, 25))