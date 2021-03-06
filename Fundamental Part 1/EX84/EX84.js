// Write a JavaScript program to create an object with the same keys as the provided object and values
// generated by running the provided function for each value.

let new_obj = (obj, fn) => 
    Object.keys(obj).reduce((ac,av) => ((ac[av] = fn(obj[av])),ac) ,{})


console.log(new_obj({A: 10, B: 20, C: 30}, x => x * 2))

const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj);
    return acc;
  }, {});
const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
};
console.log(mapValues(users, u => u.age));