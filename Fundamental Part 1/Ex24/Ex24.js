// Write a JavaScript program to decapitalize the first letter of a string.

let capitalize = (str) => {
    return str[0].toLowerCase() + str.slice(1, str.length)
}

console.log(capitalize("Tariq"));