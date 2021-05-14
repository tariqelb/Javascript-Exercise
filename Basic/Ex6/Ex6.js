//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.


//function isLeapYear(year) {
//  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
//}


function isLeapYear(year) {
    let y1 = new Date(year+1, 0, 1);
    let y2 = new Date(year, 0, 1);
    let days = (y1 - y2) / 1000 / 60 / 60 / 24;
    return (days == 366) ? true : false;
}
console.log(isLeapYear(2028));