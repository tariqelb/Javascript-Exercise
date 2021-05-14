


let selection_sort = (arr) =>
{
    for(let i = 0; i < arr.length; i++)
    {
        let j = i;
        let min = arr[j];
        let index = i;
        for (; j < arr.length ; j++)
        {   
            if (min > arr[j])
            {
                min = arr[j];
                index = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
console.log(selection_sort([23,34,5,6,233,4]))