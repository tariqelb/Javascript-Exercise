// Write a JavaScript program to get the integers in range (x, y)

let intInRange = (x,y) => {
    // let arr = []
    if (y - x === 2)
        return [x + 1]
    else
    {   
        let arr = intInRange(x,y-1);
        arr.push(y -1)
        return arr
    }
}

console.log(intInRange(3,9))