// Write a JavaScript program to retrieve a set of properties indicated by the given selectors from an object.


let get = (obj, ...arg) => 
    [...arg].map(element => 
        element.replace(/\[([^\[\]]*)\]/g, '.$1.')
        .split('.')
        .filter(void_ => void_ !== '')
        .reduce((prev, cur) => prev && prev[cur], obj)
    );



const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };

console.log(get(obj, 'selector.to.val', 'target[0]', 'target[2].a'));