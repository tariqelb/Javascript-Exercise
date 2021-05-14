// Write a JavaScript program that work as a trim function (string) using regular expression.

let fntrim = (str) =>
{
    let reg1 = /^[ ]+/;
    let reg2 = /[ ]+$/;
    str = str.replace(reg1 ,"");
    str = str.replace(reg2 ,"");
    // str =  str.replace(/^\s+|\s+$/g, '');
    return str;
}

console.log(fntrim("    this is a try  a    "))