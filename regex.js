// Regular expressions (regexes) are a set of characters that define a search pattern.
// The following are five regexes that developers often use.

// ANY NUMERIC CHARACTER
let reg = /\d+/
console.log('/d+/  ANY NUMERIC VALUE-----------------------')
console.log(reg.test('123')) // true
console.log(reg.test('1rgsa')) // true
console.log(reg.test('rg6JE')) // true

console.log(reg.test('rgE')) // false
console.log(reg.test('%&/$')) // false

// ONLY NUMERIC CHARACTERS
let onlyNumerics = /^\d+$/
console.log('/^d+$/  ONLY NUMERIC VALUES-----------------------')
console.log(onlyNumerics.test('2123')) // true
console.log(onlyNumerics.test('1111')) // true
console.log(onlyNumerics.test('111r')) // false

// INCLUDE ALPHANUMERIC CHARACTERS
let onlyAlphanumeric = /[a, zA, Z0-9]/
console.log(
  '/[a, zA, Z0-9]/ ONLY ALPHANUMERIC CHARACTERS-----------------------'
)
console.log(onlyAlphanumeric.test('The Cartesian Problem')) // true
console.log(onlyAlphanumeric.test('The Cartesian Problem&%')) // true
console.log(onlyAlphanumeric.test('&///&')) // false
console.log(onlyAlphanumeric.test('^')) // false
