// Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'


function non_repeat_char(str)
{
    let i = 0;
    while (i < str.length)
    {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i]))
            return str[i]
        i++;
    }    
}

console.log(non_repeat_char('abacddbecf'))