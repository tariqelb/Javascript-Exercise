// Write a JavaScript function to check whether a given value is IP value or not.

let ip = (str) =>
{
    let reg = /^([0-9]|[1-9][1-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([1-9]|[1-9][1-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([1-9]|[1-9][1-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([1-9]|[1-9][1-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
    return reg.test(str);
}

console.log(ip("1.16.125.255"))