// Write a JavaScript function to compute the factors of a positive integer. 

function factors(nbr) {
    let arr = [];

    for (let i = 1; i <= nbr; i++)
        (nbr % i) === 0 ? arr.push(i) : "";
    return arr;
}

console.log(factors(7))
console.log(factors(16))
console.log(factors(17))
console.log(factors(20))
