// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

let gcd = (x,y) => {
    let smallest = (x > y) ? y : x;
    let i = 1;
    let xs = [];
    let ys = [];

    while (i <= Math.floor(smallest / 2))
    {
        x % i === 0 ? xs.push(i) : "";
        y % i === 0 ? ys.push(i) : "";
        i++;
    }
    i = ys.length -1;
    while (i >= 0)
    {
        if(xs.includes(ys[i]))
            return ys[i];
        else
            i--;
    }
    return 0;
}

console.log(gcd(544 ,442))

var gcd2 = function(a, b) {
    if ( ! b) {
        return a;
    }
    console.log(a,b, a%b)

    return gcd(b, a % b);
};

console.log(gcd2(8, 12));
console.log(gcd2(12, 8));
console.log(gcd2(8, 4));
console.log(gcd2(4, 0));

