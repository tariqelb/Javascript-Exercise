// Write a JavaScript program to take any number of iterable objects 
// or objects with a length property and returns the longest one.


const longestItem = (...vals) => [...vals].sort((a, b) => b.length - a.length)[0];
console.log(longestItem('this', 'is', 'a', 'testcase'));
console.log(longestItem(...['a', 'ab', 'abc']));
console.log(longestItem(...['a', 'ab', 'abc'], 'abcd'));
console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));
console.log(longestItem([1, 2, 3], 'foobar'));


let longest_obj = (...objs) => {
    let i = 0;   
    while (i < objs.length - 1)
    {
        len0 = objs[i].hasOwnProperty('length') ? objs[i].length : Object.keys(objs[i]).length;
        len1 = objs[i+1].hasOwnProperty('length') ? objs[i+1].length : Object.keys(objs[i+1]).length;
        obj = (len0 > len1)  ? objs[i] : objs[i+1];
        i++;
    }
    return obj
}

let obj1 = {
    A: 1, B: 2, C: 3, D: 4
}
let obj2 = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6
}
let obj3 = {
    A: 1, B: 2, length: 3
}
console.log(longest_obj(obj1, obj2, obj3))