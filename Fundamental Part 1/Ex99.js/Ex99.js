// Write a JavaScript program to hash a given input string into a whole number.


let hash_string = (str) => [...str].reduce((ac,av,i) => av.charCodeAt(0) * Math.pow(31, str.length - i - 1) + ac ,0)

console.log(hash_string('w3r'));
console.log(hash_string('name'));

let sdbm_hash = (str) => [...str].reduce((ac, av) => (ac = av.charCodeAt(0) + (ac << 6) + (ac << 16) - ac) ,0)

console.log(sdbm_hash('w3r'));
console.log(sdbm_hash('name'));


const sdbm = str => {
    let arr = str.split('');
    return arr.reduce(
      (hashCode, currentVal) =>
        (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
      0
    );
  };
console.log(sdbm('w3r'));
console.log(sdbm('name'));

console.log(5 << 29, 5 * Math.pow(2,29))