//  Write a JavaScript function that checks whether a passed string is palindrome or not? 

function palindrome(str) {
    str1 = str.replace(/ /g, '')
    return [...str1].every((c,i) => c === str1[str1.length - i - 1])
}

console.log(palindrome("oskaa k s   o"))
