/* Scenario: You are building a feature that converts a flat list of users into a "lookup object" for faster searching.

Input: An array of objects: [{ id: 'a1', name: 'Alice' }, { id: 'b2', name: 'Bob' }]

Task:
Create a function that uses reduce to turn this array into an object where the id is the key.
Ensure that the original array objects are not modified.
Add a method to your result object called updateName(id, newName) that updates a user's name by reference.
*/

const inputArray = [
  { id: "a1", name: "Alice" },
  { id: "b2", name: "Bob" },
];

const lookup = inputArray.reduce((acc, user) => {
  return {
    ...acc,
    [user.id]: {
      ...user,
    },
  };
}, {});

lookup.updateName = function (id, newName) {
  if (this[id]) {
    this[id].name = newName;
    console.log(`Updated ${id} to ${newName}`);
  } else {
    console.log("User not found");
  }
};

lookup.updateName("a1", "yash");

console.log(lookup["a1"]);
console.log(inputArray[0]);
