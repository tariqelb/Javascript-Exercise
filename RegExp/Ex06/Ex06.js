// Write a JavaScript program to count number of words in string.

let words = (str) =>
{
    let reg = /\w*/g
    str = str.replace(/^\s+|\s+$/gi, "")
    str = str.replace(/[ ]{2,}/gi, " ")
    str = str.replace(/\n /g, "\n")

    return str.split(" ").length
}

console.log(words(" count number   of words \nin string "))