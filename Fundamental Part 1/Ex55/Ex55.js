//  Write a JavaScript program to Join all given URL segments together, then normalizes the resulting URL.

let join_url = (...args) => {
    return args.join('/').replace(/\/\//g,'/').replace(/\/\?/g, '&').replace(/\/.\&/, '?')
}

console.log(join_url("http://www.google.com"  , "a" , "/b/c", "?search=foo", "?name=bar"));

const URL_Join = (...args) =>
  args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');


console.log(join_url("http://www.google.com"  , "a" , "/b/c", "?search=foo", "?name=bar"));