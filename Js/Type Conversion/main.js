// Type Conversion - Manually Conversion

const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)
console.log(Number('Sakar'))
console.log(String(23), 23)

// Type Coercion - Automatic Conversion

console.log('I am ' + 23 + ' years old') // Convert 23 also to string
console.log(`23` - `10` - 3) // 10
console.log(`10` / `2`) // 5
console.log(`23` * 4) //92
console.log(`23` > '18') // True

let n = `1` + 1;
n = n - 1
console.log(n)  // 10