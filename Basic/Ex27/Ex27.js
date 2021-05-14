// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

function checkStr(str)
{
    return (str.substring(0, 4) === "Java")
}

console.log(checkStr("Javascript"))