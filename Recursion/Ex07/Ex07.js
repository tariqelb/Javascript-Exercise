// Write a JavaScript program to check whether a number is even or not.

let even = (n) => {
    if (n % 2 === 0)
        return true
    return false
}

console.log(even(5))

function is_even_recursion(number)
{
  if (number < 0) 
  {
    number = Math.abs(number);
  }
  if (number===0) 
  {
    return true;
  }
  if (number===1) 
  {
    return false;
  }
  else 
  {
    number = number - 2;
    return is_even_recursion(number);
  }
}
console.log(is_even_recursion(234)); //true
console.log(is_even_recursion(-45)); // false
console.log(is_even_recursion(-45)); // false