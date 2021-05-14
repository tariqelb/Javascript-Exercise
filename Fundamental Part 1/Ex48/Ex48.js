// Write a JavaScript program to get an array of function property names from own 
// (and optionally inherited) enumerable properties of an object.

let prp_name = (obj, inherited) => 
  (!inherited ? Object.keys(obj) : [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
  ).filter(key => typeof obj[key] == 'function');


function Test_fn() {
    this.A = () => 1;
    this.B = () => 2;
    this.C =  3;
}

Test_fn.prototype.D = () => 4;
Test_fn.prototype.E = 5;

console.log(prp_name(new Test_fn, true))