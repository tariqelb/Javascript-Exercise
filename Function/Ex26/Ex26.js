// Write a JavaScript function to find longest substring in a given a string without repeating characters. 


function substring(string)
{
    let str = string;
    let sub = [];
    let substr = []
    let i = 0;

    while (i < str.length)
    {
        if (!sub.includes(str[i]))
            sub.push(str[i++]);
        else if (sub.includes(str[i]))
        {    
            substr.push(sub.join(''));
            str = str.slice(str.indexOf(str[i]) + 1);
            sub = [];
            i = 0;
        }
        else
            i++;
    }
    substr.push(sub.join(''));
    i = 0;
    str = substr[0]
    while (i < substr.length)
    {
        str.length > substr[i].length ? str : str = substr[i] ;
        i++;
    }  
    return str
}
console.log(substring("longeststringinsub"))