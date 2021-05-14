// Write a JavaScript function to validate whether a given value type is pure json object or not

let is_json = (val) => toString.call(val) == '[object Object]'

console.log(is_json({name: 'fartalane'}))