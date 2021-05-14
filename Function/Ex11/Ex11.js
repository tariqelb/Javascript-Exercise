// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest 
// numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function second_minmax(arr) {
    return arr.filter((e,i) => i == 1 || i == arr.length -2)
}

console.log(second_minmax([1,2,3,4,5]))