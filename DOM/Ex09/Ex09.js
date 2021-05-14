// Write a JavaScript program to count and display the items of a dropdown list, in an alert window.
// Sample HTML file :

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <style type="text/css">
// body {margin: 30px;}
// </style>   
// <title>Count and display items of a dropdown list - w3resource</title>
// </head><body><form>
// Select your favorite Color :
// <select id="mySelect">
// <option>Red</option>
// <option>Green</option>
// <option>Blue</option>
// <option>White</option>
// </select>
// <input type="button" onclick="getOptions()" value="Count and Output all items">
// </form></body></html>

let getOptions = () =>
{
    let elem = document.getElementById("mySelect").children;
    let items = ""
    for (let i = 0; i < elem.length; i++)
        items += " " + elem[i].innerText;
    alert(`The length is   ${elem.length} \n content this items: ${items} `)
}