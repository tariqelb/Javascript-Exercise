// Write a JavaScript program that will return true if the string is y/yes or false if the string is n/no.


let bool_str = (str) => {
    if (str === "yes" || str === "y")
        return true;
    else if (str === "no" || str === "n")
        return false;
}

console.log(bool_str("y"));