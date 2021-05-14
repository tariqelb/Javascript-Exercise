// Write a JavaScript program to replace the names of multiple object keys with the values provided.

let obj1 = {firstname: 'tariq', lastname: 'elbouhali', age: 33};
let obj2 = {fname: "Moha", lname: "bouhali", year: 12};




// // //#Source https://bit.ly/2neWfJ2 
// const rename_keys = (keysMap, obj) =>
//   Object.keys(obj).reduce(
//     (acc, key) => ({
//       ...acc,
//       ...{ [keysMap[key] || key]: obj[key] }
//     }),
//     {}
//   );
// const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
// console.log("Original Object");
// console.log(obj);
// console.log("-------------------------------------");
// result = rename_keys({ name: 'firstName', job: 'Actor' }, obj);
// console.log("New Object");
// console.log(result);

// const rename_keys1 = (obj1, obj2) => {
//     Object.keys(obj1).map((key, index) => {
//         keys = Object.keys(obj2);
//         obj1[keys[index]] = obj1[key];
//         delete obj1[key];
//     })
//     return obj1
// }
// console.log(rename_keys1(obj1, obj2))

let rename_keys2 = (obj1, obj2) => {
    let keys = Object.keys(obj2);
    Object.keys(obj1).map((key, index) => 
    {
        Object.defineProperty(obj1, keys[index], Object.getOwnPropertyDescriptor(obj1, key))
        delete obj1[key];
    });
    return obj1
}

console.log(rename_keys2(obj1, obj2))