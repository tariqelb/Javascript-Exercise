//  Write a JavaScript program to get an array of given n random integers in the specified range.


let arr_of_n_random = (n, min, max) => {
    let arr = []
    for(let i = 0; i < n; i++)
        arr.push(Math.floor(Math.random() * (max - min + 1) + min))
    return arr;
}

console.log(arr_of_n_random(5,1,7));


const random_intArray_In_Range = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);

console.log(random_intArray_In_Range(1,7,3))


