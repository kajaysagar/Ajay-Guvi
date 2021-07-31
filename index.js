const people = [
  { name: "Adhi", gender: "male" },
  { name: "Ahamed", gender: "male" },
  { name: "Rutika Kadam", gender: "female" },
  { name: "Priyadharsini", gender: "female" },
];

// Task 1: find all female name
const x = people.filter((person) => person.gender == 'female');
const names = x.map(person => person.name);
console.log(names);

//Task 2: Starting with 'A'
const startsWith_A = people.filter((person) => person.name.startsWith("A"));
const namesWith_A = startsWith_A.map(person => person.name);
console.log(namesWith_A);

// Task 3: Count the no. of males
const numMale  = people.filter((person) => person.gender == 'male');
console.log(numMale.length);
