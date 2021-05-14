// Write a JavaScript function to get the function name.

function fn_param(data,fn)
{
    fn(data);
}

function print(data)
{
    console.log(data);
}

function fn_name(fn)
{
    return (fn.name)
}

console.log(fn_name(print))

function abc() {
    console.log( arguments.callee.name );
}

abc();