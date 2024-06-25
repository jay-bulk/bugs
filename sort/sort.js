// The following list is not sorting correctly. Why/What's the fix?
const people = [
  { firstName: "Aaron", lastName: "Smith" },
  { firstName: "Émile", lastName: "Zola" },
  { firstName: "Charlotte", lastName: "Brown" },
  { firstName: "Beyoncé", lastName: "Knowles" },
  { firstName: "Ólafur", lastName: "Arnalds" },
  { firstName: "David", lastName: "Jones" },
  { firstName: "Zoë", lastName: "Deschanel" },
];

function sortAlphabetically(arr) {
  return arr.sort((a, b) => {
    if (a.firstName < b.firstName) {
      return -1;
    }

    if (a.firstName > b.firstName) {
      return 1;
    }

    return 0;
  });
}

const sorted = sortAlphabetically(people)
console.log(sorted)
