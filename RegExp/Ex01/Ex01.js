// Write a JavaScript program to test the first character of a string is uppercase or not. 

let first_char_upper_case = (str) => 
{
    let reg = /^[A-Z]/;
    return (reg.test(str))
}

console.log(first_char_upper_case("Tariq"));