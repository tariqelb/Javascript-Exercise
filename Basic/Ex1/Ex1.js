// 1. Write a JavaScript program to display the current day and time in the following format.
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

let CurrDate = new Date();
let Weekday = CurrDate.toLocaleDateString('en-us', {weekday: 'long'});
let Hours = CurrDate.getHours();
let Minutes = CurrDate.getMinutes();
let Secounds = CurrDate.getSeconds();
let prepand ;
console.log(Hours < 12)
if (Hours < 12)
{
    prepand = "AM"
}
else if (Hours == 12)
{
    prepand = "PM"
}
else
{
    prepand = "PM"
    Hours = Hours - 12;
}


console.log(`Today is : ${Weekday}. 
Current time is : ${Hours} ${prepand} : ${Minutes} : ${Secounds} `)
