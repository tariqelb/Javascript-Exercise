// Write a JavaScript program to find every element that exists in any
// of the two given arrays once, using a provided comparator function. 


// let find_ele = (arr1, arr2) =>
// {
//     let arr = [];
//     arr =  arr1.filter((el) => !arr.includes(el))
//     arr2.filter((el) => !arr.includes(el) ? arr.push(el) : '')
//     return arr;
// }

// console.log(find_ele([1,2,3,4],[1,4,8,9,5]))

let unique_ele = (arr1, arr2, fn) => {
        return [...arr1,...arr2].filter((el,i,ar) => ar.findIndex(el1 => fn(el1,el)) == i )    
}


let  arr1 = [1,2,3,4];
let arr2 = [4,6,3,8];
console.log(unique_ele(arr1,arr2, (a,b) => a == b))