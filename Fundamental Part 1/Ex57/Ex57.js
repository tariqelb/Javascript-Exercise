// Write a JavaScript program to compute the average of an array,
// after mapping each element to a value using the provided function.


let average = (arr, fn) => {
    return arr.reduce((ac,av) => 
        ac + ((typeof fn === 'function') ? fn(av) : av[fn])
    ,0) / arr.length
}

console.log(average([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a));
console.log(average([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a'));