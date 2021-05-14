//  Write a JavaScript program to implement the Luhn Algorithm used to validate a variety of identification numbers,
// such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.

let luhn_algo = (id, ids) => {
    a = [...String(id).split('').reverse()]
    .map((ele, i) => !(i % 2) ? parseInt(ele) : parseInt(ele) * 2 > 9 ? String(parseInt(ele) * 2).split('').reduce((a,c) => parseInt(a) + parseInt(c)) : ele * 2 )
    .reduce((a,b) => a + b) % 10

    return a == 0 ? true : false
}

console.log(luhn_algo(5487477801781726))