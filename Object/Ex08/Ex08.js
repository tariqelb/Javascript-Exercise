// Write a JavaScript program to create a Clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

function gettime()
{
    let time = new Date();
    return (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds())
}

let intervalId;

let clock = () => {
    intervalId = setInterval(() => console.log(gettime()) , 1000) ;
}

clock()


clearInterval(intervalId) // stop interval
