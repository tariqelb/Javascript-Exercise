// Write a JavaScript function to validate whether a given value is object or not.


let obj = (val) => typeof(val) == 'object' || typeof(val) =='function';

console.log(obj({}))
console.log(obj(() => {}))



function is_object(value)
        {
        var datatype = typeof value;
        return datatype === 'function' || datatype === 'object' && !!value;
       }

console.log(is_object({name: 'Robert'}));
console.log(is_object(() => {}));