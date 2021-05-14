// Write a JavaScript program to create a new string from a given string taking the last 3 characters
// and added at both the front and back. The string length must be 3 or more. 

function addStr(str)
{
    if (str.length >= 3)
        return (str.substring(0, 3) + str + str.substring(0, 3))
    else
        return str;
}

console.log(addStr("tar"))
