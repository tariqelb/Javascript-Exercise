// Write a JavaScript program to invert the key-value pairs of an object, without mutating it.
// The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value.
// If a function is supplied, it is applied to each inverted key. 

let invert = (obj, fn) => 
    Object.keys(obj).reduce((ac, key) => {
        const val = fn ? fn(obj[key]) : obj[key];
        ac[val] =  ac[val] || [];
        ac[val].push(key)
        return ac
    }, {})


console.log(invert({a: 1, b: 3, c: 1}))
console.log(invert({a: 1, b: 3, c: 1}, val => "group" + val))