// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

let obj_length = (obj) => Object.keys(obj).length;

console.log(obj_length(student))

