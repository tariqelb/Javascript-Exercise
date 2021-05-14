// Write a JavaScript program for binary search.
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'

let binary_search = (arr, ele) => {
    if (arr.length <= 2)
    {
        if (arr[0] === ele)
            return 1
        return 2
    }   
    else 
    {
        med = Math.ceil(arr.length / 2);
        if  (arr[med-1] >= ele && arr[0] <= ele)
            return 0 + binary_search(arr.slice(0, med),ele)
        else if (arr[arr.length -1] >= ele && arr[0] <= ele) 
            return med + binary_search(arr.slice(med, arr.length),ele)
    }
    return "not includes"
}

console.log(binary_search([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],10 ))

