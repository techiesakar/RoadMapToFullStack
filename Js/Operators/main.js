/*
// Basics Operator
let currentyear = 2022
const ageSakar = currentyear - 1998
const ageSamir = currentyear - 2001
console.log(ageSakar)
console.log(ageSamir, ageSakar)

// Assignment Operators
console.log(ageSakar * 2, ageSamir / 10, 2 ** 3)
const firstName = 'Sakar'
const lastName = 'Aryal'
console.log(firstName + ' ' + lastName)
let x = 10 + 5;
x += 10;
x*=4; // x = x*4
x++

console.log(x);
x--
console.log(x);

// Comparison Operator
console.log(ageSakar>ageSamir) // >,<,>=,<=
console.log(ageSamir>=21)

*/

// ----------- Precedence

const currentyear = 2022
const ageSakar = currentyear - 1998
const ageSamir = currentyear - 2001
console.log(currentyear - 1991 > currentyear - 2018)
console.log(25 - 10 - 5) // left to right
let x, y
x = y = 25 - 10 - 5 // Assignment has only 3 but Sub has 14
// x = y = 10
console.log(x, y)
const averageAge = (ageSakar + ageSamir) / 2 // Parenthetis has 21, Division has 16
console.log(ageSakar, ageSakar, averageAge)
