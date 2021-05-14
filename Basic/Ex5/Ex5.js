//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically 
//removing one letter from the end of the string and attaching it to the front.  

function animate_string() {
let element = document.getElementById("target");
let textnode = element.childNodes[0];
let text = textnode.data;

setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textnode.data = text;
}, 100);
}