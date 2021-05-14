// Write a JavaScript program to compare two objects to determine if the first one contains
// equivalent property values to the second one. 

const matches = (obj, source) => 
Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

console.log(matches({age1: 24, hair1: "blue"}, {age1: 24, hair1: "blue"}))


/*function m(o, s)
{
    return Object.keys(s).every(key => o.hasOwnProperty(key) && o[key] === s[key]);
}*/
//console.log(m({age1: 24, hair1: "blue"}, {age1: 24, hair1: "blue"}))
