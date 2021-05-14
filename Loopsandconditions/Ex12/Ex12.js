// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

let multi_sum = () => 
{
    let i = 0;
    let sum = 0;

    while(i < 1000)
    {
        if(i % 3 === 0 || i % 5 === 0)
            sum = sum + i;
        i++;
    }
    return sum;
} 

console.log(multi_sum())