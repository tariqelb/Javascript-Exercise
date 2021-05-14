// Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.


let combineArr = (arr) => 
    arr.reduce( (a, v) => a.concat(a.map(r => r.concat(v))),[[]]);

console.log(combineArr([1, 2, 3]));

// function combineArr(arr)
// {
//     let ar = [];
//     let i = 0;
//     let j = 0;
//     let x = 1;
//     ar[0] = [];
//     while (i < arr.length)
//     {
//         j = i + 1;
//         ar[x++] = [arr[i]];
//         while(j < arr.length)
//         {
//             ar[x++] = [arr[i]].concat(arr[j])
//             console.log(i,j);
//             j++
//         }
//         i++;
//     }
//     console.log(ar);
// }
