// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

let nbr_sort = (n1, n2, n3) =>
{
    let rst = [n1, n2, n3]

    for(let i = 0; i < rst.length -1; i++)
    {
        if (rst[i] < rst[i+1])
        {
            rst[i] = rst[i] + rst[i+1];
            rst[i+1] = rst[i] - rst[i+1];
            rst[i] = rst[i] - rst[i+1];
            i = -1;
        }
    }
    return rst
}

console.log(nbr_sort(5,7,2))
console.log(nbr_sort(9,-4,12))