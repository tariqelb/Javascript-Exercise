// Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

let sort_nbr = (arr1) => {
    let arr = [...arr1]
    let i = 0;
    for (i ; i < arr.length - 1; i++)
    {
        if (parseInt(arr[i]) > parseInt(arr[i+1]))
        {
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            i = 0;
        }
    }
    return (arr)
}

function binarySearch(arr, element) {
    let s_arr = sort_nbr(arr)
    let med = Math.floor(arr.length / 2)
    let ele;
    if (element <= s_arr[med])
    {
        if (s_arr.length > 2)
            ele = binarySearch(s_arr.slice(0,med+1),element)
        else
            element == s_arr[0] ? ele = s_arr[0] : ele = s_arr[1]
    }
    else if (element > s_arr[med])
    {
        if (s_arr.length > 2)
            ele = binarySearch(s_arr.slice(med,s_arr.length), element)
        else
            element == s_arr[0] ? ele = s_arr[0] : ele = s_arr[1]
    }
    return ele
}
console.log(binarySearch([1,2,5,3,4,6,7,8,10,9,11,13], 3))



function array_binarySearch(narray, delement) {
    var mposition = Math.floor(narray.length / 2);
 
    if (narray[mposition] === delement){
       return mposition;
    }
    else if (narray.length === 1) 
    {
       return null;
    }
    else if (narray[mposition] < delement) {
       var arr = narray.slice(mposition + 1);
       var res = array_binarySearch(arr, delement);
       if (res === null)
       {
          return null;
       }
       else {
          return mposition + 1 + res;
       }
    }
    else {
       var arr1 = narray.slice(0, mposition);
       return array_binarySearch(arr1, delement);
    }
 }
 
  var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
  console.log(array_binarySearch(myArray, 6));