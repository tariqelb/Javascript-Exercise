// Write a JavaScript program to sort a list of elements using Merge sort.
// According to Wikipedia "Merge sort (also commonly spelled mergesort) is an O (n log n) 
// comparison-based sorting algorithm. Most implementations produce a stable sort, which means
//  that the implementation preserves the input order of equal elements in the sorted output."

let merge_sort = (arr) =>
{
    let med = Math.floor(arr.length / 2);
    let left;
    let right;
    // console.log(med)
    if (arr.length >= 3)
    {
        left = merge_sort(arr.slice(0, med));
        right = merge_sort(arr.slice(med, arr.length))
    }
    // console.log(arr)
    for (let j = 0; j < arr.length -1; j++)
    {
        if(arr[j] > arr[j+1])
        {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp;
            j = -1;
        }
    }
    // console.log(arr)
    return arr;
}


console.log(merge_sort([21,14,23,11,15,61,19]))