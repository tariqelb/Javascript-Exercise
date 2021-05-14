//  Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.

let extend = ([...color]) =>  color.reduce((ac, av) =>  ac.concat(av.concat(av)),'#')

let str = "abc";
console.log(extend(str))

const extend_hex = (hex) => 
    "#" + hex.slice(hex.startsWith("#") ? 1 : 0).split('').map(x => x + x).join('');

console.log(extend_hex("#abc"))