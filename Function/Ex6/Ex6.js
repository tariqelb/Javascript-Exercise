// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longest_word(str) {
    length = Math.max(...str.split(" ").map(e => e.length))
    index = [...str.split(" ").map(e => e.length)].indexOf(length)
    return str.split(' ')[2]
}

console.log(longest_word('Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.'))