// Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function argType(arg) {
    return typeof arg;
}

let A = "";
let B =  true
let C = {};
let D = 1;
let E = () => {};
let F;

let AA = String("");
let BB =  Boolean()
let CC = Object();
let DD = Number();
let EE = function(){};
let FF = undefined;

console.log(argType(A))
console.log(argType(B))
console.log(argType(C))
console.log(argType(D))
console.log(argType(E))
console.log(argType(F))

console.log(argType(AA))
console.log(argType(BB))
console.log(argType(CC))
console.log(argType(DD))
console.log(argType(EE))
console.log(argType(FF))