//  Write a JavaScript program to iterate over all own properties of an object, running a callback for each one.

let iterate_obj = (obj, fn) => 
    Object.keys(obj).forEach(key => typeof obj[key] === 'object' ? iterate_obj(obj[key],fn) : fn(obj[key]))


let obj = {
    firstname: "tariq",
    lastname: "elbouhali",
    age: 29,
    skills: {
        1: "coding",
        2: "panting",
        3: "E_commerce"
    }
}
let fn = (element) => console.log(element);
iterate_obj(obj, fn);