//Write a JavaScript program to find all elements in a given array except for the first one.
// Return the whole array if the array's length is 1.

let find_all_ele = (arr) => {
    return (arr.length == 1) ? arr : arr.slice(1);
}
console.log(find_all_ele([1,4,5,7]))
console.log(find_all_ele([1]))