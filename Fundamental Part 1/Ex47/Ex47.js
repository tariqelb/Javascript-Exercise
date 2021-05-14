// Write a JavaScript program to perform a deep comparison between two values to determine if they are equivalent.

let compare = (a, b) => {
    if (a === b)
        return true;
    if (a instanceof Date && b instanceof Date)
        return a.getTime() == b.getTime();
    if (a == null || a == undefined || b == null || b == undefined)
        return false;
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
        return a === b;
    if (a.prototype !== b.prototype)
        return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length)
        return false;
    return keys.every(k => compare(a[k], b[k])); 
}
console.log(compare({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }));