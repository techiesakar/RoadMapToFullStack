const hasLicense = true
const hasGoodVision = false

console.log(hasLicense && hasGoodVision)
console.log(hasLicense || hasGoodVision)
console.log(!hasLicense)

const shouldDrive = hasGoodVision && hasLicense

if (shouldDrive)
    console.log('Sarah is able to drive')
else
    console.log('Someone else should drive')