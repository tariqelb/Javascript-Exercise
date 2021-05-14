// Write a JavaScript program to extract out the values at the specified indexes from a specified array.


let popval = (arr, index) => 
{
    let newarr = [];
    arr.map((e, i) =>
    {
        if (index.includes(i))
        {
            newarr.push(e);
        }
    }
    )
    return newarr
    // console.log(index.includes(3))
}
console.log(popval(["a","b","c","d","e"], [2,3]))