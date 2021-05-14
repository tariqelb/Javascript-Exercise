// Write a JavaScript program to delete the rollno property from the following object.
//  Also print the object before or after deleting the property.
// Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

let remove_property = (obj, property, print) => 
{
    if (print == 0)
        console.log(obj);
    delete obj.property;
    if (print == 1)
        console.log(obj);
}

remove_property(student, "rollno", 1)