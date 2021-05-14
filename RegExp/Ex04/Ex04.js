// Write a JavaScript program to search a date within a string.


let  check_date = (date) => 
{
    let reg = /^(0?[1-9]|[1-2][1-9]|3[0-1])\/(0?[1-9]|1[0-2])\/([0-9]{2})?[0-9]{2}$/
    return reg.test(date)
}

console.log(check_date("30/01/1800"))
console.log(check_date("23/05/2099"))
console.log(check_date("13/09/1928"))
console.log(check_date("03/10/1800"))