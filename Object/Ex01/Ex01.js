//  Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

let properties = (obj) => Object.keys(obj);

console.log(properties(student))