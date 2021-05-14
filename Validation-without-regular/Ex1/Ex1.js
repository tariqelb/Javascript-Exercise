// Write a JavaScript function to validate whether a given value type is boolean or not

let bool = (val) =>  typeof(val) == 'boolean';

console.log(bool(true))
console.log(bool(false))
console.log(bool("true"))

function is_boolean(value)
        {
        return value === true || value === false || toString.call(value) === '[object Boolean]';
       }

       