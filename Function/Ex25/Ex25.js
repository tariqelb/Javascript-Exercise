// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"


function longest(arr)
{
    let longest;

    for (let i = 0; i < arr.length - 1; i++)
        longest = arr[i].length > arr[i + 1].length ? arr[i] : arr[i + 1];
    return longest;
}

console.log(longest(["Australia", "Germany", "United States of America"]))