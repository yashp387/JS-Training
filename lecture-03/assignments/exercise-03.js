/* Exercise 3: The Price Formatter
Scenario: You have a list of raw number prices. You need to format them for the UI.
Input: [10, 20, 30]
Task: Use .map() to add a "$" sign to the front of every number.
Expected Output: ["$10", "$20", "$30"] */

const input = [10, 20, 30];

const result = input.map((i) => "$"+ i);
console.log(result);