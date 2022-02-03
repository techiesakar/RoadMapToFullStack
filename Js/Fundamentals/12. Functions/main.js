/*
Part 1
function logger() {
    console.log(`My name is Sakar`)
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)
*/

// Part 2

// function expression
function calcAge1(birthYear){
    const age = 2022 - birthYear
    return age
}

// function expression
const age1 = calcAge1(1998)
console.log(age1)

const calcAge2 = function (birthYear){
    return 2037 - birthYear
}

const age2 = calcAge2(1991)
console.log(age1, age2)
