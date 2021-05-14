// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

let GCD = (n1, n2) =>
{
    let med = n1 > n2 ? Math.ceil(n1/2) : Math.ceil(n2/2)
    let i = 0;
    let GCD = []
    while (i < med)
    {
        if(n1 % i === 0 && n2 % i === 0)
            GCD.push(i)
        i++;
    }
    return GCD[GCD.length -1]
}

console.log(GCD(16,24))