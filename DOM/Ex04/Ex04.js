// Here is a sample html file with a submit button. Write a JavaScript function to get the value of the href, hreflang,
//  rel, target, and type attributes of the specified link. Go to the editor

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// </head>
// <body>
// <p><a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="https://www.w3resource.com/">w3resource</a></p>
// <button onclick="getAttributes()">Click here to get  attributes value</button>
// </body></html>

let getAttributes = () =>
{
    let elem = document.getElementById("w3r").attributes;
    let div = document.getElementById("text")
    for (let i = 0; i < elem.length; i++)
    {
        div.innerText += elem[i].name + " = " +  elem[i].value + '\n'
    }
}