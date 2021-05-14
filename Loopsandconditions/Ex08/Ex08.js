// According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits,
// and repeat the process until the number equals 1 (where it will stay),
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers,
// while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers. 

let happyNumber = () =>
{
    let HappyNumbers = []

    let i = 1;
    while (HappyNumbers.length < 15)
    {
        let j = 0;
        let pow = 0;
        if (i < 10)
        { 
            pow = Math.pow(i,2)
            if (pow == 1)
                HappyNumbers.push(i);
            else
            {
                while (j < 10)
                {
                    let str = String(pow)
                    pow = 0;
                    let s = 0;
                    while (s < str.length)
                    {
                        pow = pow + Math.pow(parseInt(str[s]),2)
                        s++;
                    }
                    if (pow === 1)
                    {
                        HappyNumbers.push(i);
                        j = 10;
                    }
                    else
                        j++;    
                }
            }
        }
        else 
        {
            pow = i;
            while (j < 10)
            {
                let str = String(pow)
                pow = 0;
                let s = 0;
                while (s < str.length)
                {
                    pow = pow + Math.pow(parseInt(str[s]),2)
                    s++;
                }
                if (pow === 1)
                {
                    HappyNumbers.push(i);
                    j = 10;
                }
                else
                    j++;
            }
        }
        i++;
    }
    return HappyNumbers;
}

console.log(happyNumber())

console.log(Math.pow(8,2))