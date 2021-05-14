// Write a JavaScript program to sort a list of elements using Insertion sort.

let insertion_sort = (arr) =>
{
    let i = 1;

    while (i < arr.length)
    {
        if (arr[i] < arr[i -1])
        {
            while (arr[i] < arr[i -1] && i > 0)
            {
                let temp = arr[i];
                arr[i] = arr[i -1];
                arr[i -1] = temp;
                i = i - 1;
            }
        }
        i++;
    }
    return arr
}

console.log(insertion_sort([21,32,132,63,17]))

