//  Write a JavaScript program to group the elements of a given array based on the given function.

let group_By = (arr, fn) => {
    return arr.map(val => typeof fn === 'function' ? fn(val) : val[fn])
    .reduce((ac, av,i) => 
    ((ac[av] = (ac[av] || []).concat(arr[i])),ac)
    ,{})
}

console.log(group_By([6.1, 4.2, 6.3], Math.sqrt)); 
console.log(group_By([6.1, 4.2, 6.3], Math.floor)); 
console.log(group_By(['one', 'two', 'three'], 'length'));