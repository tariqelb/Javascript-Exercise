// Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes
// of its digits is equal to the number itself.
// For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

let armStrong = () =>
{
    let rst = [];
    let i = 1
    while (rst.length < 5)
    {
        let s = String(i)
        let j = 0;
        let sum = 0
        while (j < s.length)
        {
            sum = sum + Math.pow(parseInt(s[j]), 3)
            j++;
        }
        console.log(sum,i,Math.pow(i,3) === sum)
        if (i === sum)
            rst.push(i)
        i++;
    }
    return rst;
}

console.log(armStrong())