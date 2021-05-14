// Write a JavaScript function to check whether a given value is UK Post Code or not.

let Uk_post_code = (str) =>
{
    let reg = /^[A-Z]{1}([A-Z]|[1-9]){3} ?\d{1}([A-Z]|[1-9]){2}$/;
    return reg.test(str);
}

console.log(Uk_post_code("A3UT 2YT"))
console.log(Uk_post_code("4RF3 A6H"))
console.log(Uk_post_code("RE3Z 3ji"))

// regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;