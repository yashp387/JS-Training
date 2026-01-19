// Scenario: You receive a list of messy usernames from a signup form. Some have extra spaces, and they are all lowercase.
// Input: " micheal , SARAH, jessica , bobby "
// Task: Write a function that:
// Splits the string into an array.
// Removes the extra whitespace from each name.
// Capitalizes the first letter of each name.
// Joins them back into a single string separated by a semicolon (;).

const input = " micheal , SARAH, jessica , bobby ";

const test = (data) => {
  return data
    .split(",")
    .map((name) => {
      const trimmedName = name.trim();
      return (
        trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase()
      );
    })
    .join(":");
};

const result = test(input);
console.log(result);
