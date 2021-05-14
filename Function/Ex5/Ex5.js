// Write a JavaScript function that accepts a string as a parameter and converts the first letter 
// of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function upper(str) {
    return [...str.split(' ')].map(e => e[0].toUpperCase().concat(e.slice(1))).join(' ')
}

console.log(upper("the quick brown fox"))