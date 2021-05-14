// Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function increaseMode(N1, N2, N3)
{
    if (N1 < N2 && N2 < N3)
        console.log("increasing in strict mode");
    else
        console.log("increasing in soft mode");
}

increaseMode(25, 25, 118);