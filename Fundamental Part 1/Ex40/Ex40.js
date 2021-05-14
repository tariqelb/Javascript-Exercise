// Write a JavaScript program to create an array of key-value pair arrays from a given object.

let key_val_arr = (obj) =>  Object.keys(obj).reduce((ac,av) => ac.concat([[av, obj[av]]]), [])
let key_val_arr2 = (obj) =>  Object.keys(obj).map(v => [v, obj[v]])


let obj = {
    name: "tariq",
    lastName: "El bouhali",
    age: 28
}
console.log(key_val_arr(obj))
console.log(key_val_arr2(obj))