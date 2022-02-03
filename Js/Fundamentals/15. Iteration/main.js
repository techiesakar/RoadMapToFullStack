// For loop

for (let rep = 1; rep <= 2; rep++) {
  console.log(`Lifting weights reperition ${rep}`);
}

const sakar = [
  "Sakar",
  "Aryal",
  2022 - 1998,
  "Developer",
  ["Estrella", "Daniel", "Jack"],
];

// Creating all the types of the above variables
const types = [];

for (let i = 0; i < sakar.length; i++) {
  console.log(sakar[i]);
  types[i] = typeof sakar[i];
}

console.log(types);
// Continue and break
console.log(`--- ONLY STRIGNS ---`);
for (let i = 0; i < sakar.length; i++) {
  if (typeof sakar[i] != "string") continue;
  console.log(sakar[i], typeof sakar[i]);
}
console.log(`--- Break after first number found ---`);
for (let i = 0; i < sakar.length; i++) {
  if (typeof sakar[i] == "number") break;
  console.log(sakar[i], typeof sakar[i]);
}

// Looping backward
console.log(`Looping Backward`);
for (let i = sakar.length - 1; i >= 0; i--) {
  console.log(sakar[i]);
}

// Nested Loop

for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`------ Starting Excercise ${excercise} ------`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`lifting weight repetition ${rep}`);
  }
}

// --------- While Loop
console.log(`----- Introducing While Loop ------`);
let rep = 1;
while (rep < 6) {
  console.log(`WHILE : lifting weight repetition ${rep}`);
  rep++;
}

// Roll of dice
let dice = Math.trunc(Math.random() * 6)+1;


while(dice!==6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6)+1;
    if(dice==6) console.log(`Loop is about to end...`)
}
