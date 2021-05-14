//  Write a JavaScript program to create an object from the given key-value pairs.

let create_obj = (key, val) => {
    obj = {}
    key.forEach((e, i) => obj[e] = val[i]);
    return obj;
}
obj1 = create_obj(["a","b","c"], ["1","2","3"])
console.log(obj1);

let create_obj1 = (arr) => {
    return arr.reduce((ac,av) => {
        ((ac[av[0]] = av[1]));
        return ac   
    }, {})
}

obj2 = create_obj1([["a",1], ["b", 2], ["c", 3]]);
console.log(obj2)


const object_From_Pairs = arr => arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {});
console.log(object_From_Pairs([[1, 10], [2, 20], [3, 30]]));
