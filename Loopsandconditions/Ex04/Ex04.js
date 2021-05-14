// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

let largestIn5nbr = (n1, n2, n3, n4, n5) =>
{
    let rst = [n1, n2, n3, n4, n5];

    rst = rst.sort((a, b) => parseInt(a) < parseInt(b))
    return rst[0];
}

console.log(largestIn5nbr(5,87,34,654,-54))