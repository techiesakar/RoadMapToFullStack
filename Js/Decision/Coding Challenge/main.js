// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)

// For data 1
let heightMark1 = 1.69
let heightJohn1 = 1.95
let massMark1 = 78
let massJohn1 = 92
let BMI_Mark1 = massMark1 / heightMark1 ** 2
let BMI_John1 = massJohn1 / heightJohn1 ** 2
console.log("BMI of Mark is ", BMI_Mark1)
console.log("BMI of John is ", BMI_John1)

if(BMI_John1>BMI_Mark1){
    console.log(`John has Higher BMI`)
}
else{
    console.log(`Mark has higher BMI`)
}

// For data 2

let heightMark2 = 1.88
let heightJohn2 = 1.76
let massMark2 = 95
let massJohn2 = 85
let BMI_Mark2 = massMark2 / heightMark2 ** 2
let BMI_John2 = massJohn2 / heightJohn2 ** 2
console.log("BMI of Mark is ", BMI_Mark2)
console.log("BMI of John is ", BMI_John2)

if(BMI_John2>BMI_Mark2){
    console.log(`John has Higher BMI`)
}
else{
    console.log(`Mark has higher BMI`)
}
