// Write a JavaScript program to create a new string from a given string changing the position of first and last characters.
// The string length must be greater than or equal to 1.

function strChange(str)
{
    if (str.length > 1)
    {
        let fChar = str[0]; //str.charAt(0)
        let lChar = str[str.length - 1];// str.charAt(str.length -1)
        str = lChar + str.substring(1, str.length - 1) + fChar
    }
    return str;
}

console.log(strChange("tariq"));