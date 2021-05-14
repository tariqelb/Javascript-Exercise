// <!-- Write a JavaScript function to get the values of First and Last name of the following form. Go to the editor
// Sample HTML file :

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Return first and last name from a form - w3resource</title>
// </head><body>
// <form id="form1" onsubmit="getFormvalue()">
// First name: <input type="text" name="fname" value="David"><br>
// Last name: <input type="text" name="lname" value="Beckham"><br>
// <input type="submit" value="Submit">
// </form>
// </body>
// </html> --></br>

let getFormvalue = () =>
{
    let obj = {
        firstname:"",
        lastname: ""
    }
    let vals = document.getElementById("form1")
    obj.firstname = vals[0].value;
    obj.lastname = vals[1].value;
    console.log(obj)
    // return false
} 