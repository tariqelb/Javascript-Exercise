// Write a JavaScript program to return the minimum-maximum value of an array,
// after applying the provided function to set comparing rule. 


let min_max = (arr) => { 
    let rst = [arr[0], arr[0]];
    arr.forEach((element) => {
        rst[0] = (element > rst[0]) ? element : rst[0];
        rst[1] = (element < rst[1]) ? element : rst[1];
    });
    return rst;
}

console.log(min_max([2,24,134,16,27,41]));

let reduce_witch = (arr, compare ) => 
    arr.reduce((a, b) => (compare(a,b) >= 0 ? a : b))

console.log(reduce_witch([2,3,21,5,7,4,], (a, b) => a - b)); 
console.log(reduce_witch([2,3,21,5,7,4,], (a, b) => b - a)); 
console.log(reduce_witch([{name: "tariq", age: 28},{name: "khalid", age: 27},{name: "sarah", age: 25}], (a, b) => b.age - a.age)); 