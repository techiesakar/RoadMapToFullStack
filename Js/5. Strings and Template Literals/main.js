const firstName = 'Sakar'
const job = 'Student'
const birthYear = 1998
let currentYear = 2022
let age = currentYear - birthYear
// We can concatinate all these into string by using "+" sign
const sakar = "I'm " + firstName + ', a ' + age + ' years old ' + job
console.log(sakar)

// Proper way is to use Template Literals

console.log(`I'm ${firstName}, a ${age} years old ${job}`)

// Multi Line String
console.log("This is first line\nThis is second line")

// By using Template Literal
console.log(`This is first line using Template Literal
This is second line`)