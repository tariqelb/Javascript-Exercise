// Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

let expo = (nbr, base) => {
    if (base == 1)
        return nbr;
    return nbr * expo(nbr, base - 1)
}

console.log(expo(8,2))
