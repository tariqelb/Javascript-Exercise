// Write a merge sort program in JavaScript. 
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]

let mergeSort = (arr) =>
{
    if (arr.length <= 2)
    {
        if(arr[0] > arr[1])
        {
            let temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
        }
        return arr
    }
    else
    {
        let med = Math.ceil(arr.length / 2);
        let left = mergeSort(arr.slice(0,med));
        let right = mergeSort(arr.slice(med, arr.length));
        let merge = []
        while (left.length > 0 && right.length > 0)
        {
            merge.push((left[0] <= right[0]) ? left.shift() : right.shift())
        }
        arr = merge.concat(left).concat(right);
        return arr;
    }
}

console.log(mergeSort([34,7,23,32,5,62]))

Array.prototype.merge_sort = function() 
{
    if (this.length <= 1)
        return this
    else
    {
        let med = Math.ceil(this.length / 2);
        let left = this.slice(0,med).merge_sort();
        let right = this.slice(med, this.length).merge_sort();
        let merge = function(left, right)
        {
            let array = []
            while (left.length > 0 && right.length > 0)
            {
                array.push((left[0] <= right[0]) ? left.shift() : right.shift())
            }
            return array.concat(left).concat(right);
        }
        return merge(left,right);
    }
}

arr = [34,7,23,32,5,62];
console.log(arr.merge_sort())