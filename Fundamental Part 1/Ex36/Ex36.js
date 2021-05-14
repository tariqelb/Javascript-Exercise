//  Write a JavaScript program to create a function that invokes each provided function
// with the arguments it receives and returns the results. 

let invokes = (...fns) => (...args) => {
    return fns.map(v => v.apply(null, args))
}

const minmax = invokes(Math.max, Math.min);
console.log(minmax(1,2,3,4))