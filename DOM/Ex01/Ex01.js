// Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
// Sample HTML file :

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
// <title>JS DOM paragraph style</title>
// </head> 
// <body>
// <p id ='text'>JavaScript Exercises - w3resource</p> 
// <div>
// <button id="jsstyle"
// onclick="js_style()">Style</button>
// </div>
// </body>
// </html>
// Clicking on the button the font, font size, and color of the paragraph text will be changed.

let count = 0;
let js_style = () =>
{
    let stl = document.getElementById("text");
    if (!(count % 2))
    {
        stl.style.font = "monospace";
        stl.style.fontSize = "24px";
        stl.style.color = "blue";
    }
    else if (count % 2)
    {
        stl.style.font = "";
        stl.style.fontSize = "";
        stl.style.color = "";
    }
    count++;
}

// js_style();