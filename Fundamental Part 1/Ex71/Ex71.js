// Write a JavaScript program to create a deep clone of an object. 

const deepClone = obj => {
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
      key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    );
    return Array.isArray(obj) ? (clone.len = obj.length) && Array.from(clone) : clone;
};
//   const a = { foo: 'bar', obj: { a: 1, b: 2 } };
//   const b = deepClone(a); // a !== b, a.obj !== b.obj
//   console.log(b)


 // Deep Clone
 obj = { a: 0 , b: { c: 0}};
 let deepClone1 = JSON.parse(JSON.stringify(obj));
 obj.a = 5;
 obj.b.c = 5;
 console.log(JSON.stringify(obj)); // { a: 5, b: { c: 5}}
 console.log(JSON.stringify(deepClone1)); // { a: 0, b: { c: 0}}
 
 deepClone1.a = 6;
 deepClone1.b.c = 6;
 console.log(JSON.stringify(obj)); // { a: 5, b: { c: 5}}
 console.log(JSON.stringify(deepClone1)); // { a: 6, b: { c: 6}}