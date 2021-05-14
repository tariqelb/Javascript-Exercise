// Write a JavaScript program to convert an array of objects to a comma-separated values 
// (CSV) string that contains only the columns specified.

let arr = [{firstname: "tariq", lastname: "elbouhali", age: 34}, {firstname: "Brahim", lastname: "Douch"},{firstname: "Moha"}, {lastname: "boha"}];
let columns = ['firstname', 'lastname', "age"];
let delemiter = ',';
let objToCsv = function (array, columns, delemiter)
{
     return [  columns.join(delemiter), ...array.map(v => 
        columns.reduce((acc, key) =>
        `${acc}${!acc.length ? '' : delemiter}"${!v[key] ? '' : v[key]}"`,''))
    ].join("\n")
}

console.log(objToCsv(arr, columns, delemiter));

const JSON_to_CSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');