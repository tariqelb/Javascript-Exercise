//  Write a JavaScript program to clone a given regular expression.


let clone_regexp = regexp => new RegExp(regexp.source, regexp.flags)

let reg = /^a(.)?/ig;
console.log(clone_regexp(reg))



let re = new RegExp(/\/ab+c/, "ig");
console.log(re);
console.log(re.source);
console.log(re.flags);
console.log(typeof re);