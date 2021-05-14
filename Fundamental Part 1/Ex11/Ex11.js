// Write a JavaScript program to generate a random hexadecimal color code.

let color = () => 
{
    let cCode = '#';
    for (let i = 0; i < 6; i++)
    {
        cCode = cCode + Math.floor(Math.random() * 16).toString(16);
    }
    return cCode;
}

console.log(color());
let n = 32
console.log(n.toString(16));