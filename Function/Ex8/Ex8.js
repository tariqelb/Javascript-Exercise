// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function prime(nbr) {
    let prime = nbr + " is not prime"
    for (i = 2; i < nbr; i++)
        (nbr % 2) === 0 ? prime = nbr + " is not prime" : prime = nbr + " is prime"
    return prime
}

console.log(prime(17))
console.log(prime(16))
console.log(prime(1))