// Write a JavaScript function that accept row, column, (to identify a particular cell)
//  and a string to update the content of that cell.
// Sample HTML file :

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Change the content of a cell</title>
// </head><body>
// <table id="myTable" border="1">
// <tr><td>Row1 cell1</td>
// <td>Row1 cell2</td></tr>
// <tr><td>Row2 cell1</td>
// <td>Row2 cell2</td></tr>
// <tr><td>Row3 cell1</td>
// <td>Row3 cell2</td></tr>
// </table><form>
// <input type="button" onclick="changeContent()" value="Change content">
// </form></body></html>


let changeContent = (row , cell , text) => 
{
    let modify = document.getElementById("myTable").childNodes[1].childNodes
    //console.log(modify);
    for (let i = 0; i < modify.length; i++)
    {
        if (modify[i].nodeName == "TR")
        {
            if (modify[i].innerText.slice(0,4) == row)
            {
                let m1 = modify[i].childNodes;
                for (let j = 0; j < m1.length; j++)
                {
                    if (m1[j].nodeName == "TD")
                    {
                        if (m1[j].innerText.slice(5,10) == cell)
                            m1[j].innerText = text;
                    }
                }
                //console.log(modify[i].childNodes)
                // console.log(modify[i].innerText);
            }
        }
    }
}

function changeContent2()
{
rn = window.prompt("Input the Row number(0,1,2)", "0");
cn = window.prompt("Input the Column number(0,1)","0");
content = window.prompt("Input the Cell content");  
var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}