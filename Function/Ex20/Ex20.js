//  Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function string_id() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let str = "";
    for (let i = 0; i < 8; i++)
        str = str + chars[(Math.random() * 61).toFixed()];
    return str
}

console.log(string_id())
