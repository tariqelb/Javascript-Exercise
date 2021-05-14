// Write a JavaScript program to group the elements of an array based on the given 
// function and returns the count of elements in each group. 

let group_by = (arr, fn) => {
    len = (arr.filter(ele => typeof fn === 'function' ? fn(ele) : fn[ele])).length
    return [arr.length - len , len]
}

console.log(group_by([1,3,4,12,432,23,8], a => a > 10))
console.log(group_by(["moha","nohe", "sadiqe", "acheraf" , "mohsine", "tariq"], a => a.length > 5))


let group_by2 = (arr, fn) => {
    return arr.map(v => typeof fn === 'function' ? fn(v) : v[fn] ).reduce((acc,val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {})
}

console.log(group_by2([6, 10, 100, 10], Math.sqrt));
console.log(group_by2([6.1, 4.2, 6.3], Math.floor));
console.log(group_by2(['one', 'two', 'three'], 'length'));