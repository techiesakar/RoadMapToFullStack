let birthYear = 1998
let currentYear = 2022
let age = currentYear - birthYear
let isOldEnough = age>=18
if(isOldEnough){
    console.log(`Can have driving license`)
}
else{
    let yearsLeft = 18 - age;
    console.log(`Sakar is too young. Wait another ${yearsLeft} years`)
}

if(birthYear<=2000){
    console.log(`You're from 20s century`)
}
else{
    console.log(`You're from 21st century`)
}

birthYear = 2005
currentYear = 2022
age = currentYear - birthYear
isOldEnough = age>=18
if(isOldEnough){
    console.log(`Can have driving license`)
}
else{
    yearsLeft = 18 - age;
    console.log(`Sakar is too young. Wait for another ${yearsLeft} years`)
}
if(birthYear<=2000){
    console.log(`You're from 20s century`)
}
else{
    console.log(`You're from 21st century`)
}