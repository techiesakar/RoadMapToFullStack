// function attached to object is called method
const sakar = {
  firstName: "Sakar",
  lastName: "Aryal",
  birthYear: 1998,
  profession: "Developer",
  friends: ["Estrella", "Daniel", "Peter"],
  hasDrivingLicense: true,
  //   calcAge: function (birthYear) {
  //     return 2022 - birthYear;
  //   },
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return 2022 - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.profession
    } and he has ${this.hasDrivingLicense ? "a" : "no"} driving license`;
  },
};
// console.log(sakar.calcAge(sakar.birthYear));
// console.log(sakar["calcAge"](sakar.birthYear));

console.log(sakar.calcAge());
console.log(sakar.age);

// Challenges
// Sakar is 23 years old teacher, and he has a driver's license
console.log(sakar.getSummary());
