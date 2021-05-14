//  Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function checkRange(N1, N2)
{
    if ((N1 >= 40 && N1 <= 60) && (N1 >= 40 && N1 <= 60))
        console.log(`the number ${N1} and ${N2} in the range 40..60`)
    if ((N1 >= 70 && N1 <= 100) && (N1 >= 70 && N1 <= 100))
        console.log(`the number ${N1} and ${N2} in the range 70..100`)
}

checkRange(45, 55);
checkRange(75, 85);
