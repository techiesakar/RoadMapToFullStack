// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Function
const calcAge3 = (birthYear) => 2022 - birthYear;

const age3 = calcAge3(1902);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};
console.log(yearsUntilRetirement(1998, "Sakar"));
console.log(yearsUntilRetirement(2001, "Samir"));
