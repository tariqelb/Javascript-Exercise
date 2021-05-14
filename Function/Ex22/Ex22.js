// Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function occur(str, char)
{
    let occur = 0;
    let i = 0;

    while (i < str.length)
        str[i++] === char ? occur++ : occur
    return occur
}

console.log(occur("Write a JavaScript function that accepts two arguments,", "t"))