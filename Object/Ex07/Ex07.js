// Write a JavaScript program which returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

let str_subset = (str) =>
{
    let subset = [];

    for (let i = 0; i < str.length; i++)
    {
        for (let j = i + 1; j <= str.length; j++)
            subset.push(str.slice(i, j));
    }
    return subset;
}

console.log(str_subset("dog"))