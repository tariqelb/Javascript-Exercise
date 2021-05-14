//  Write a JavaScript function to count the number of vowels in a given string. Go to the editor


let vowels = (str) => 
{
    let reg = /[aeuio]/gi;
    return str.match(reg).length;
}

console.log(vowels("The quick brown fox jumps over the lazy dog"));