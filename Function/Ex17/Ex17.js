//  Write a JavaScript function to  get the number of occurrences of each letter in specified string.


function char_occurrences(str)
{
    return  [...str.toLowerCase().replace(/ /g,'')].reduce((ac,av) => (ac[av] = ac.hasOwnProperty(av) ? ac[av] + 1 : 1,ac),{})
}

console.log(char_occurrences("hasOwnProperty"))