const age = 18
if (age === 18)
    console.log(`Strict equality operator`)

if (18 == `18`)
    console.log(`loose equality operator`)
const favourite = prompt("What's your Favourite number ?")
console.log(favourite)
console.log(typeof favourite)

if (favourite == 23) // loose
    console.log(`Cool! 23 is an amazing number`)
if (favourite === 23) // strict
    console.log(`Cool! 23 is an amazing number`)
else if (favourite == 7)
    console.log(`7 is also cool number`)
else if (favourite == 9)
    console.log(`9 is also cool number`)
else
console.log(`Number is not 23 or 7 or 9`)
