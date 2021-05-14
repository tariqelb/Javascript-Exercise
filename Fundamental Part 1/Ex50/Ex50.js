// Write a JavaScript program to convert an integer to a suffixed string, adding AM or PM based on its value

let hour = (nbr) => {
    while (nbr > 24)
        nbr -= 24
    return nbr === 0 || nbr === 24 ? 12 + ' AM' : nbr === 12 ? 12 + ' PM' : nbr < 12 ? nbr + ' AM' : nbr % 12 + ' PM'
}

console.log(hour(0))
console.log(hour(1))
console.log(hour(11))
console.log(hour(12))
console.log(hour(13))
console.log(hour(23))
console.log(hour(24))
console.log(hour(25))
console.log(hour(35))
console.log(hour(36))
console.log(hour(37))
console.log(hour(47))
console.log(hour(48))

const get_Meridiem_Suffix_Of_Integer = num =>
  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
      ? 12 + 'pm'
      : num < 12
        ? (num % 12) + 'am'
        : (num % 12) + 'pm';

console.log(get_Meridiem_Suffix_Of_Integer(0));
console.log(get_Meridiem_Suffix_Of_Integer(11));
console.log(get_Meridiem_Suffix_Of_Integer(13));
console.log(get_Meridiem_Suffix_Of_Integer(25));

