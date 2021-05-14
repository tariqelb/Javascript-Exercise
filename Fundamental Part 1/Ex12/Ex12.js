// Write a JavaScript program to removes non-printable ASCII characters from a given string.


const remove_non_ASCII = str => str.replace(/[^\x20-\x7E]/g, '');
//replace anything not in the range 32-126 with empty charcter
console.log(remove_non_ASCII('äÄçÇéÉêw3resouröceÖÐþúÚ'));