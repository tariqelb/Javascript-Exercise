// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

let sign = (n1, n2, n3) => {
    let sum = n1 * n2 * n3;
    let sign = sum > 0 ? "+" : "-"
    
    // alert("The sign is " + sign)
    return sign;
}

console.log(sign(6,6,-6))
console.log(sign(6,-6,-6))
console.log(sign(-6,-6,-6))