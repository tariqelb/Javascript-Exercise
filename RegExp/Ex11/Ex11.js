// Write a JavaScript function to check whether a given value is time string or not.

let valid_time = (str) =>
{
    let reg = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    return reg.test(str);
}

console.log(valid_time("01:65:50"))
console.log(valid_time("01:35:80"))
console.log(valid_time("24:55:50"))
console.log(valid_time("00:00:00"))
console.log(valid_time("23:59:59"))