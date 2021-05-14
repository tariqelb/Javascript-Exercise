// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

function removeChar(str, pos)
{
    return (str.slice(0, pos) + str.substring(pos + 1, str.length));
}

console.log(removeChar("tariq" , 3))