// Write a JavaScript program to remove an event listener from an element.

let btn1 = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let content = document.getElementById('prg')

count = 0;
arr = ["blue", "green", "red","black"]

function change_color(){
    count += 1
    if (count == 4)
    count = 0 
    content.style.color = arr[count];
}

btn1.addEventListener('click', change_color);


function remove_event() {
    document.getElementById("btn").removeEventListener('click', change_color) 
}





// const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);
// const fn = () => console.log('!');
// document.body.addEventListener('click', fn);
// console.log(off(document.body, 'click', fn)); 


// btn.onclick = function change_color(){
//     count += 1
//     if (count == 4)
//         count = 0 
//     content.style.color = arr[count];
// }