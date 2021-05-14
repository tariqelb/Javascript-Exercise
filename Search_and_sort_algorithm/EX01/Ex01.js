// Write a JavaScript program to sort a list of elements using Quick sort. 
// Quick sort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation
//  (formally, a total order) is defined.

let swap = (arr, i, j) =>
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // console.log(arr,i,j)
}


let partition = (arr, low , high) =>
{
    let pivot =  arr[high];
    let i = low -1;

    for (let j = low; j <= high - 1; j++)
    {
        if (arr[j] < pivot)
        {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i+1 , high)
    return i +1;
}

let Quick_sort = (arr , low, high) =>
{
    if (low < high)
    {
        let pi = partition(arr, low, high)
        // console.log(arr[pi])
        Quick_sort(arr, low, pi - 1)
        Quick_sort(arr, pi + 1, high)
    }
    return arr;
}
let arr = [12, 51,16,78, 19, 45, 79, 55, 22];
console.log(Quick_sort(arr, 0, arr.length-1));