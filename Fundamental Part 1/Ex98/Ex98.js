// Write a JavaScript program to filter an array of objects based on a condition while also filtering out unspecified keys.


let obj_filter = (data, key, fn) => data.filter(e => fn(e)).map(el => key.reduce((ac,av) => (ac[av] = el[av],ac),{}))

const data = [
    {
      id: 1,
      name: 'john',
      age: 24
    },
    {
      id: 2,
      name: 'mike',
      age: 50
    }
  ];
  
  console.log(obj_filter(data, ['id', 'name'], item => item.age > 24));