// Write a JavaScript program that accept two integers and display the larger.

let larger = (n1, n2) => n1 > n2 ? n1 : n2 > n1 ? n2 : "equal"

console.log(larger(5,8))
console.log(larger(9,4))
console.log(larger(3,3))