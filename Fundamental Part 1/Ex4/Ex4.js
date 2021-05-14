// Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects.
// The first row of the string is used as the title row.

function csvString(str, delemiter)
{
    let titles = str.slice(0, str.indexOf("\n")).split(delemiter);
    let arr = str.substring(str.indexOf('\n') + 1).split('\n').map(v => 
        {
            const value = v.split(delemiter)
            return titles.reduce(function (obj, title, index) { 
            obj[title] = value[index];
            console.log(obj[title], title,value[index], index);    
            return obj; //return value or accummulator
            },
            {}//initial value
            );
           
        });
    console.log(arr);
    return arr;
}

console.log(csvString("col1,col2\na,b\nc,d", ','));

const CSV_to_JSON = (data, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
      .slice(data.indexOf('\n') + 1)
      .split('\n')
      .map(v => {
        const values = v.split(delimiter);
        return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
      });
  };
console.log(CSV_to_JSON("col1,col2\na,b\nc,d", ','));
