// Write a JavaScript program to calculate the volume of a sphere.
// Sample Output of the form :

let sphere = () =>
{
    let input = document.getElementById("inpt").value;
    let sphr = (3/4 * Math.PI * input).toFixed(4);
    let rslt = document.getElementById("result");
    rslt.innerText = sphr
}