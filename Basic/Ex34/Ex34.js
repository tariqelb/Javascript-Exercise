// Write a JavaScript program to find the larger number from the two given positive integers,
// the two numbers are in the range 40..60 inclusive.

function largestNumber(N1, N2)
{
    if ((N1 >= 40 && N1 <= 60) && (N1 >= 40 && N1 <= 60))
    {
        if (N1 == N2)
            return ("the numbers are equal");
        else
            return (N1 > N2) ? N1 : N2;
    }
    else
        return ("The numbers are not in the range")
}
console.log(largestNumber(45, 56));