// Write a JavaScript program to check a credit card number. 

let credit_card_validation = (str) =>
{
    let reg = /^[5][1-5]\d{2}([\- \n]{1})\d{4}([\- \n]{1})\d{4}([\- \n]{1})\d{4}$/;
    // luhn algorithm
    return reg.test(str);
}

console.log(credit_card_validation("5161-7687-5432-9876"))
console.log(credit_card_validation("5161 7687 5432 9876"))