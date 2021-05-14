//  Write a JavaScript exercise to get the extension of a filename.

let filename = "extention.js";
let ext = filename.split('.')[1];
console.log(ext);
filename = "extention.java";
ext = filename.split('.').pop();
console.log(ext);