// Write a JavaScript function to check whether a given value is alpha numeric or not.

let alpha_numeric = (str) =>
{
    let reg = /(\w+)/;
    return reg.test(str);
}

console.log(alpha_numeric("AZ23"))
console.log(alpha_numeric("23AZ23"))
console.log(alpha_numeric("A23AZ"))
console.log(alpha_numeric("2A23AZ2"))