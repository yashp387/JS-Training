// Problem 8: Convert Object Keys to Uppercase
// Objective:
// Transform object keys without mutating the original object.
// Function
// convertKeysToUpperCase(obj)

// Requirements:
// Convert only top-level keys
// Preserve values
// Return a new object
// Do not mutate original object

// Expected Outcome:
// { name: "A", age: 30 } → { NAME: "A", AGE: 30 }

const inputObject = {
  name: "Alice",
  age: 30,
  role: "developer",
  isAdmin: true
};

const convertKeysToUpperCase = (obj) => {
    if(!obj || typeof obj !== "object" || Array.isArray(obj)) {
        console.warn("Invalid input");
        return {};
    }

    const entries = Object.entries(obj);
    
    const upperCaseEntries = entries.map(([key, value]) => {
        return [key.toUpperCase(), value];
    });

    return Object.fromEntries(upperCaseEntries);
}

const result = convertKeysToUpperCase(inputObject);
console.log("Original:", inputObject);
console.log("Converted:",result);


// second way to solve this problem
// const convertKeysToUpperCase2 = (obj) => {
//     return Object.keys(obj).reduce((acc, key) => {
//         acc[key.toUpperCase()] = obj[key];
//         return acc;
//     }, {});
// }

// console.log("part 2")
// const result2 = convertKeysToUpperCase2(inputObject);
// console.log("Original:", inputObject);
// console.log("Converted2:",result2);