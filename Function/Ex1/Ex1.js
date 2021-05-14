// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function reverce_number(nbr) {
    return [...(nbr + '')].reduce((a,b,i) => a + b * Math.pow(10,i),0)
}

console.log(reverce_number(12345))
console.log(typeof reverce_number(12345))

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));
console.log(typeof reverse_a_number(32243));