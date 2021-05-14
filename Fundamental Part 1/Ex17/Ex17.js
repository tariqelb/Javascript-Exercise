// Write a JavaScript program to split values of two given arrays into two groups. If an element in filter is truthy,
// the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group. 

let Filter = (arr, fil) => {
   let rest = [[],[]]
   arr.forEach((element, index) => {
       fil[index] ? rest[0].push(element) : rest[1].push(element)
   });
   return rest;
}

console.log(Filter([1,2,3,4], [true, true, false, true]));

const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]));