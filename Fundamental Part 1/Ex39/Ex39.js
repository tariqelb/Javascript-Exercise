// Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.


let remove_key = (obj, key) => delete obj[key]
let remove_key1 = (obj, arr) => arr.forEach(element => delete obj[element])

let obj = {
    name: "tariq",
    lastName: "El bouhali",
    age: 28
}


console.log(obj)
remove_key(obj, "age");
console.log(obj)
remove_key1(obj, ["name", "age"]);
console.log(obj)
