//  Write a JavaScript program to get an object containing the parameters of the current URL.


let get_url_param = (url) => {
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).map(v => v.split("=")).reduce((ac, av) => 
        ((ac[av[0]] = av[1]),ac)
    , {})
}


console.log(get_url_param('http://url.com/page?name=Adam&k=&surname=Smith&')); 
console.log(get_url_param('google.com'));
console.log(get_url_param('https://www.w3resource.com'));

