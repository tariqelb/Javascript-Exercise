// Write a JavaScript function to check whether a given value is US zip code or not

let US_zip_code = (str) =>
{
    let reg = /^(00)?\d{3}-\d{4}$/;
    return reg.test(str);
}

console.log(US_zip_code("00657-4532"));
console.log(US_zip_code("657-5643"));
console.log(US_zip_code("06574"));