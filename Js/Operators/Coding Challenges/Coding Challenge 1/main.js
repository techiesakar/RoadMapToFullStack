/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both
        versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about
        whether Mark has a higher BMI than John.
Test data:
    Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
    Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

*/

// For data 1
let heightMark1 = 1.69
let heightJohn1 = 1.95
let massMark1 = 78
let massJohn1 = 92
let BMI_Mark1 = massMark1 / heightMark1 ** 2
let BMI_John1 = massJohn1 / heightJohn1 ** 2
console.log("BMI of Mark is ", BMI_Mark1)
console.log("BMI of John is ", BMI_John1)
let markHigherBMI1 = BMI_Mark1>BMI_John1
console.log(markHigherBMI1)

// For data 2

let heightMark2 = 1.88
let heightJohn2 = 1.76
let massMark2 = 95
let massJohn2 = 85
let BMI_Mark2 = massMark2 / heightMark2 ** 2
let BMI_John2 = massJohn2 / heightJohn2 ** 2
console.log("BMI of Mark is ", BMI_Mark2)
console.log("BMI of John is ", BMI_John2)
let markHigherBMI2 = BMI_Mark2>BMI_John2
console.log(markHigherBMI2)