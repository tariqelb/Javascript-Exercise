//3. Write a JavaScript program to get the current date.  Go to the editor
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yy = today.getFullYear();

if (dd < 10)
    dd =  '0' + dd;

if (mm < 10)
    mm = '0' + mm;

console.log(`${mm}-${dd}-${yy}`)
console.log(`${mm}/${dd}/${yy}`)
console.log(`${dd}-${mm}-${yy}`)
console.log(`${dd}/${mm}/${yy}`)

