// Write a JavaScript program to filter out the non-unique values in an array, based on a provided comparator function.

let non_unique = (arr, fn) => {
        return arr.filter((ele, i) => 
        { 
           for (let j = 0 ; j < arr.length; j++)
           {
                if (fn(ele, arr[j]) && i != j)
                    return false
           }
           return true
        })
    }

const arr = [{id: 2, v: 'a'}, {id: 11, v: 'b'}, {id: 10, v: 'c'}, {id: 11, v: 'd'}, {id: 10, v: 'e'}];
console.log(non_unique(arr, (a,b) => a.id == b.id))
