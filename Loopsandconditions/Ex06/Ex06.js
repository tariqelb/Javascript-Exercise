// Write a JavaScript program which compute, the average marks of the following students Then, 
// this average is used to determine the corresponding grade.

let student = [{
    Name: "David",
    Mark:	80
},{
    Name: "Vinoth",
    Mark:	77
},{
    Name: "Divya",
    Mark:	88
},{
    Name: "Ishitha",
    Mark:	95
},{
    Name: "Thomas",
    Mark:	68
}]

Object.prototype.getgrade = function (student)
{
    let grade = {F:60, D:70, C:80, B:90, A:100}
    let average = this.reduce((ac,av) => ac + av.Mark,0) / this.length
    return Object.keys(grade).filter(a => grade[a] > average)[0]
} 
console.log(student.getgrade());