// Write a JavaScript program to create a new string from a given string 
// with the first character of the given string added at the front and back.

function charAdd(str)
{
    let char = str.charAt(0);
    return char + str + char;
}

console.log(charAdd('tariq'))