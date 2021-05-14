// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string,
// if "Script" presents in the string return the string without "Script" otherwise return the original one.

//function removeScript(str)
//{
//    let arr = [str.split(' ')];
//    if (arr[4] === "script")
//        return  str.substring(0, str.indexOf('script') -1)  + str.substring(str.indexOf('script') + 6 , str.length);
//    return str;
//}

//console.log(removeScript("the given string include script in the 5th position"))

function removeScript(str)
{
    if (str.substring(4, 10) == "script")
        return str.substring(0,4);
    return str;
}

console.log(removeScript("Javascript"))