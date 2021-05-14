// Write a pattern that matches e-mail addresses.
// The personal information part contains the following ASCII characters.

// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character . ( period, dot or fullstop)
//  provided that it is not the first or last character and it will not come one after the other.

let email_validation = (email) =>
{
    let reg = /^(\w+[\.-]?)*[!#\$%&\'\*\+\/=\?\^_\`\|~]*(\w+)@(\w+\.?)\w+$/
    return reg.test(email);
}

console.log(email_validation("a#a@c.m"))