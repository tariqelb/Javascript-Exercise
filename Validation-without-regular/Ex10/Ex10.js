// Write a JavaScript function to check whether given value types are same or not

let types = (val1, val2) => toString.call(val1) === toString.call(val2)

console.log(types({}, {}))


function is_sameType(value1, value2) {
    if(is_nan(value1) || is_nan(value2)) {
     return is_nan(value1) === is_nan(value2);
    }
    return toString.call(value1) === toString.call(value2);
}

function is_nan(val)
    {
    return val !== val;
   }

console.log(is_sameType('12', 100));
console.log(is_sameType('12', '100'));