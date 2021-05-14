// Write a JavaScript program to converts a specified number to an array of digits.

let arrOfDigit = (number) =>
{
    let arr = [];
    i = 0
    while (number != 0)
    {
        arr[i] = number % 10;
        number = Math.floor(number / 10)
        i++;
    }
    return arr.reverse();
}
console.log(arrOfDigit(123));
let digitalize = n => [...`${n}`].map(v => parseInt(v));
console.log(digitalize(123))
