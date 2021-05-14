// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

function vowels(str) {
    let vowel = ["A","a","E","e","O","o","I","i","U","u"]
    let n_vowel = 0;
    
    [...str].forEach(e => vowel.includes(e) ? n_vowel++ : "")
    return n_vowel;
}

console.log(vowels("The quick brown fox"))