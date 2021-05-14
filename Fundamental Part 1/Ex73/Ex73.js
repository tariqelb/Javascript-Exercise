//  Write a JavaScript program to return the difference between two arrays,
// after applying the provided function to each array element of both. 

let difference = (arr1, arr2, fn) => {
    // return  [...arr1.filter(v => !new Set(arr2.map(v => fn(v))).has(fn(v))), ...arr2.filter(v => !new Set(arr1.map(v => fn(v))).has(fn(v)))]
    return  [...arr1.filter(v => !arr2.map(v => fn(v)).includes(fn(v))), ...arr2.filter(v => !arr1.map(v => fn(v)).includes(fn(v)))]
}

console.log(difference([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(difference([1.2,2.2,3.2], [3.2,4.2,5.2], Math.floor))
console.log(difference([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x));

const differenceBy = (a, b, fn) => {
    const s = new Set(b.map(v => fn(v)));
    return a.filter(x => !s.has(fn(x)));
  };

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(differenceBy([{ x: 1 }, { x: 1 }], [{ x: 2 }], v => v.x));

