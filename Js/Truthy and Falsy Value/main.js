// 5 Falsy values: 0, "", undefiend, null, NaN
console.log(Boolean(0)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean('Sakar')) // true
console.log(Boolean({})) // true
console.log(Boolean('')) // false

const money = 0 // falsey value, so will execute the else
if (money) {
    console.log(`Don't spend it all`)
} else {
    console.log(`You should get a job`)
}

let height // undefined is falsey value, so else will execute
if (height) {
    console.log(`YAY height is defined`)
} else {
    console.log(`Height is UNDEFINED`)
}