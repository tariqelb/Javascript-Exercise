//  Write a JavaScript function that returns array elements larger than a number. 

function larger_element(arr, nbr) {
    return arr.filter(e => e > nbr)
}

console.log(larger_element([2,61,4,81,612,42,16,187,54],65))