// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function checkNumber(number)
{
    if (Math.abs(100 - number ) <= 20 || Math.abs(400 - number) <= 20)
        return true;
    else
        return false; 
}

console.log(checkNumber(90))
console.log(checkNumber(190))
console.log(checkNumber(0))
console.log(checkNumber(390))