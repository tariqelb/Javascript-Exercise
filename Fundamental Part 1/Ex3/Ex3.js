// Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.


function strToArray(data, delemter)
{
    let arr = data.split("\n").map(v => v.split(','));
    console.log(arr);
}

console.log(strToArray("Abc,def\ncba,fed", ","));