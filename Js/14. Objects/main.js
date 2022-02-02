
const sakar = {
  firstName: "Sakar",
  lastName: "Aryal",
  age: 2022 - 1998,
  job: "Developer",
  friends: ["Estrella", "John", "John"],
};

console.log(sakar);
// Dot notation
console.log(sakar.lastName);
console.log(sakar.friends);
// Bracket notation
console.log(sakar, ["lastName"]);
console.log(sakar["friends"]);

// Use of Bracket notation
const namekey = "Name";
console.log(sakar["first" + namekey]);
console.log(sakar["last" + namekey]);


const interestedIn = prompt(
  `What do you want to know about Sakar ?\nChoose between \nfirstName, lastName, age, job and friends`
);
// if user entered falsey value - undefined - validation
if (sakar[interestedIn]) {
  console.log(sakar[interestedIn]);
} else {
  console.log(`Wrong request`);
}

sakar.location = "Nepal";
sakar["twitter"] = "@techiesakar";
console.log(sakar);

// Challenge
// Sakar has 3 friends, and his best friend is called Estrella
console.log(
  `${sakar.firstName} has ${sakar.friends.length} friends, and his best friend is called ${sakar.friends[0]}`
);

