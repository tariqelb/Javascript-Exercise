// Write a JavaScript program to remove falsey values from a given array. 

let compact = (arr) =>  arr.filter(ele => !ele === false )


console.log(compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]))

const compact1 = arr => arr.filter(Boolean);