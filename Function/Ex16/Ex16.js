//  Write a JavaScript function to extract unique characters from a string.
// Example string :  "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

function unique_char(str) {
    let unique = [];
    [...str].forEach(e => unique.includes(e) ? "" : unique.push(e))
    return unique.join('');
}

let str = "thequickbrownfoxjumpsoverthelazydog"
console.log(unique_char(str))