// Write a JavaScript program to get the first non-null / undefined argument. optionally NaN

let get_arg = (...args) => {
    for (let i = 0; i < args.length; i++)
    {
        if (!isNaN(args[i]) && args[i] !== null && args[i] !== undefined )
            return args[i];
    }
    return false
}

console.log(get_arg(null , undefined, NaN, ''));

let get_arg2 = (...arg) => arg.find(el => el !== null && el !== undefined)

console.log(get_arg2(null , undefined, NaN, ''));

