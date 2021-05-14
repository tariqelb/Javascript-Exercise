// Write a JavaScript program to split values into two groups, if an element in filter is truthy,
// the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.


let filter = (arr1, arr2) => 
    arr1.reduce((ac,av,i) => 
        arr2[i] ? (ac[0].push([av]),ac) : (ac[1].push([av]),ac) , [[],[]])

console.log(filter(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]));