//Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.


let date = new Date(2017, 0, 1);
console.log(date);
console.log(date.getDay());

function findDate()
{
    let index = 2014;
    let date;
    let j = 0;
    let dates = [];
    while (index <= 2050)
    {
        date = new Date(index, 0, 1)
        if ( date.getDay() == 0)
        {
            dates[j] = date.toString().slice(0, 15);
            j++;
        }
        index++;
    }
    return dates;
}
let dates = findDate();
for (n of dates)
{
    console.log(n);
}