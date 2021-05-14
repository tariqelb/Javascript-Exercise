// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

function Multiply()
{
    let n1 = document.getElementById("number1").value;
    let n2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML =  n1 * n2;
}

function Divide()
{
    let n1 = document.getElementById("number1").value;
    let n2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML =  n1 / n2;
}