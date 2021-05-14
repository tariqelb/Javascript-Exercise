// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string. 

function checkWithin(str, char)
{
    for (let i = 1; i < 4; i++)
    {
        if (str[i] === char)
            return true;
    }
    return false;
}

console.log(checkWithin("tariq", "q"));