// Write a JavaScript program to split values into two groups according to a predicate function,
// which specifies which group an element in the input collection belongs to.

let group = (arr, fn) => {
    return arr.reduce((ac,av) => 
        fn(av) ? (ac[0].push(av),ac) : (ac[1].push(av),ac)
    , [[],[]])
}

console.log(group(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));