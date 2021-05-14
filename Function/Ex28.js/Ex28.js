// Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function fn_param(data,fn)
{
    fn(data);
}

function print(data)
{
    console.log(data);
}

fn_param("tariq", print)