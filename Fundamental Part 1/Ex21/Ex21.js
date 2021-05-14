//  Write a JavaScript program to get every nth element in a given array.

// let nth_Element = (arr, nth) => {
//     let ar = []
//     arr.forEach((element, index) => {
//          ((index + 1) % nth == 0) ?  ar.push(element) : ""
//     });
//     return ar
// }

// console.log(nth_Element([2,5,6,1,8,2,7,4,9], 2))


let nth_Element = (arr, nth) => 
    arr.filter((el, index) => ((index + 1) % nth == 0) )


console.log(nth_Element([2,5,6,1,8,2,7,4,9], 2))