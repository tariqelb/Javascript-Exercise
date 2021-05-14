// Write a JavaScript program to pick the key-value pairs corresponding to the given keys from an object

let pick = (obj, arr_val) => Object.keys(obj).reduce((ac,av) => arr_val.includes(av) ? (ac[av] = obj[av],ac) :ac ,{})

console.log(pick({A:1,B:2,C:3},["A","C"]))

const pick2 = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
console.log(pick2({ a: 1, b: '2', c: 3 }, ['a', 'c']));