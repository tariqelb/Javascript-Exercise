// Write a JavaScript program to create an object composed of the properties the given function returns truthy for.
// The function is invoked with two arguments: (value, key). 


let pickby = (obj, fn) => Object.keys(obj).reduce((ac,av) => fn(obj[av],av) ? (ac[av] = obj[av],ac) :ac ,{})

console.log(pickby({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'));

const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
console.log(pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'));