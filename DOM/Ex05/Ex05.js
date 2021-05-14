// Write a JavaScript function to add rows to a table. Go to the editor
// Sample HTML file :

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Insert row in a table - w3resource</title>
// </head><body>
// <table id="sampleTable" border="1">
// <tr><td>Row1 cell1</td>
// <td>Row1 cell2</td></tr>
// <tr><td>Row2 cell1</td>
// <td>Row2 cell2</td></tr>
// </table><br>
// <input type="button" onclick="insert_Row()" value="Insert row"> 
// </body></html>

let insert_Row = () =>
{
    let add = document.getElementById("sampleTable");
    add.innerHTML += "<tr><td>Row3 cell1</td><td>Row3 cell2</td></tr>"
}