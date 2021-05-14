// Write a JavaScript program to convert a value to a safe integer.

const to_Safe_Integer = num =>
 Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));

 console.log(to_Safe_Integer(12.8))