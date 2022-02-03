const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
const years = new Array(1991, 1984, 2008, 2022);
console.log(years);
console.log(friends[0]);
console.log(years[3]);

// Excercise
const calcAge = function (birthYear) {
  return console.log(2022 - birthYear);
};

calcAge(years[0]);
